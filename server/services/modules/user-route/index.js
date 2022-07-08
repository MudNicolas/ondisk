import constantRoutes from "./modules/constant.js"
import asyncRoutes from "./modules/async.js"
import router from "../login/index.js"

const route404 = {
    path: "/:catchAll(.*)",
    name: "404",
    hidden: true,
    component: "@/views/error-page/404.vue",
}

router.get("/get", (req, res) => {
    const { role } = req
    let routes = [
        ...constantRoutes,
        ...asyncRoutes.filter(item => item?.meta?.role === role),
        route404,
    ]
    let menuOptions = routes
        .filter(item => !item.hidden)
        .map(item => ({
            path: item.path,
            label: item.meta.title,
            key: item.name,
            icon: item.meta.icon,
        }))
    res.json({
        code: 0,
        data: { routes, menuOptions },
    })
})

export default router
