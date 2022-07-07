import router from "@/router"
import store from "@/store"
import { createDiscreteApi } from "naive-ui"
import { getToken } from "@/utils/auth" // get token from cookie
import { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from "vue-router"
const { loadingBar, message } = createDiscreteApi(["loadingBar", "message"])

const whiteList: string[] = ["/login", "/auth-redirect"] // no redirect whitelist

router.beforeEach(
    async (
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) => {
        // start progress bar
        loadingBar.start()

        // determine whether the user has logged in
        const hasToken = getToken()
        if (hasToken) {
            if (to.path === "/login") {
                // if is logged in, redirect to the home page
                next({ path: "/" })
                loadingBar.finish()
            } else {
                // determine whether the user has obtained his permission roles through getInfo
                const hasRoles = store.state.user.role
                // console.log(hasRoles, "?")
                if (hasRoles) {
                    next()
                } else {
                    try {
                        // get user info
                        await store.dispatch("user/getInfo")
                        // generate accessible routes map based on roles
                        const accessRoutes: RouteRecordRaw[] = await import(
                            `./modules/${store.state.user.role}`
                        ).then(module => module.default)
                        accessRoutes.forEach(route => {
                            router.addRoute(route)
                        })
                        console.log(router)
                        next({ ...to, replace: true })
                    } catch (error) {
                        // remove token and go to login page to re-login
                        await store.dispatch("user/resetToken")
                        message.error((error as Error).message || "Has Error")
                        console.log(error)
                        next(`/login?redirect=${to.fullPath}`)
                        loadingBar.error()
                    }
                }
            }
        } else {
            /* has no token*/
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {
                next(`/login?redirect=${to.fullPath}`)
                loadingBar.error()
            }
        }
    }
)

router.afterEach(() => {
    loadingBar.finish()
})
