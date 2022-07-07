import router from "@/router"
import store from "@/store"
import { createDiscreteApi } from "naive-ui"
import { getToken } from "@/utils/auth" // get token from cookie
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router"
//import getPageTitle from '@/utils/get-page-title'
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

        // set page title
        //document.title = getPageTitle(to.meta.title)

        // determine whether the user has logged in
        const hasToken = getToken()
        console.log(!!hasToken)
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
