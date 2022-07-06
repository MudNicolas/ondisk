import { route } from "@/type/index"
const constantRoutes: route[] = [
    {
        key: "login",
        path: "/login",
        component: () => import("@/views/login.vue"),
        meta: {
            title: "登录",
            icon: "LoginOutline",
        },
    },
]

export default constantRoutes
