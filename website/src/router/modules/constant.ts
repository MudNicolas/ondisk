import { RouteRecordRaw } from "vue-router"
import Layout from "@/layout/index.vue"
const constantRoutes: RouteRecordRaw[] = [
    {
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录",
            icon: "LoginOutline",
        },
    },
    {
        path: "/",
        redirect: "/drive",
    },
    {
        path: "/redirect",
        component: Layout,
        children: [
            {
                path: "/redirect/:path(.*)",
                component: () => import("@/views/redirect/index.vue"),
            },
        ],
    },
    {
        path: "/401",

        component: () => import("@/views/error-page/401.vue"),
        meta: {
            title: "401",
        },
    },
    {
        path: "/404",

        component: () => import("@/views/error-page/404.vue"),
        meta: {
            title: "404",
        },
    },
]

export default constantRoutes
