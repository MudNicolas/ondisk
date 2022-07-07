import { route } from "@/type/index"
import Layout from "@/layout/index.vue"
const constantRoutes: route[] = [
    {
        key: "login",
        path: "/login",
        component: () => import("@/views/login/index.vue"),
        meta: {
            title: "登录",
            icon: "LoginOutline",
        },
    },
    {
        key: "/",
        path: "/",
        redirect: "/drive",
    },
    {
        path: "/redirect",
        key: "redirectRoot",
        component: Layout,
        hidden: true,
        children: [
            {
                key: "redirectBody",
                path: "/redirect/:path(.*)",
                component: () => import("@/views/redirect/index.vue"),
            },
        ],
    },
    {
        path: "/401",
        key: "401",
        component: () => import("@/views/error-page/401.vue"),
        hidden: true,
        meta: {
            title: "401",
        },
    },
    {
        path: "/404",
        key: "404",
        component: () => import("@/views/error-page/404.vue"),
        hidden: true,
        meta: {
            title: "404",
        },
    },
]

export default constantRoutes
