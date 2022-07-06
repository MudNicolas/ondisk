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
        path: "/redirect",
        component: Layout,
        hidden: true,
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
        hidden: true,
        meta: {
            title: "401",
        },
    },
    {
        path: "/404",
        component: () => import("@/views/error-page/404.vue"),
        hidden: true,
        meta: {
            title: "404",
        },
    },
]

export default constantRoutes
