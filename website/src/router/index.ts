import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录",
            icon: "LoginOutline",
            hidden: true,
        },
    },
]

//TODO:添加动态路由

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes,
})

export default router
