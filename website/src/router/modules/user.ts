import { NIcon } from "naive-ui"
import { Component, h } from "vue"
import Layout from "@/layout/index.vue"
import { RouteRecordRaw } from "vue-router"

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const userRoutes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/drive",
    },
    {
        path: "/drive",
        component: Layout,
        meta: {
            role: "user",
            icon: "BookOutline",
            title: "我的网盘",
        },
    },
    {
        path: "/fav",
        component: Layout,
        meta: {
            role: "user",
            icon: "PersonOutline",
            title: "收藏",
        },
    },
    {
        path: "/share",
        component: Layout,
        meta: {
            role: "user",
            icon: "WineOutline",
            title: "分享",
        },
    },
]

export default userRoutes
