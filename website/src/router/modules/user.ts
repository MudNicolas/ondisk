import { NIcon } from "naive-ui"
import { Component, h } from "vue"
import Layout from "@/layout/index.vue"
import { route } from "@/type/index"

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const userRoutes: route[] = [
    {
        path: "/",
        key: "disk",
        component: Layout,
        meta: {
            role: "user",
            icon: "BookOutline",
            title: "我的网盘",
        },
    },
    {
        path: "/fav",
        key: "fav",
        component: Layout,
        meta: {
            role: "user",
            icon: "PersonOutline",
            title: "收藏",
        },
    },
    {
        key: "share",
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
