import { NIcon } from "naive-ui"
import { Component, h } from "vue"
import { BookOutline, PersonOutline, WineOutline } from "@vicons/ionicons5"
import Layout from "@/layout/index.vue"
import { MenuItem } from "@/type/index"

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuItem[] = [
    {
        label: "首页",
        path: "/",
        key: "home",
        name: "home",
        icon: renderIcon(BookOutline),
        component: Layout,
    },
    {
        label: "文章",
        path: "/article",
        key: "article",
        icon: renderIcon(PersonOutline),
    },
    {
        label: "关于",
        key: "about",
        path: "/about",
        icon: renderIcon(WineOutline),
    },
]

export default menuOptions
