import router from "@/router"
import store from "@/store"
import { createDiscreteApi } from "naive-ui"
import { getToken } from "@/utils/auth" // get token from cookie
import setSideMenu from "./modules/menu"
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"
import { handleGetRoute } from "@/api/route"
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
                const hasRoles: string | null = store.state.user.role
                // console.log(hasRoles, "?")
                if (hasRoles) {
                    next()
                } else {
                    try {
                        // get user info
                        await store.dispatch("user/getInfo")
                        // generate accessible routes map based on roles

                        const { data } = await handleGetRoute()

                        const { routes, menuOptions } = data

                        for (let e of routes) {
                            console.log(e)
                            e.component = () => import("@/layout/index.vue")
                            router.addRoute(e)
                        }

                        setSideMenu(menuOptions)

                        console.log(data)

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
