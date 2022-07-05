<template>
    <NLayoutSider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
        :native-scrollbar="false"
    >
        <NMenu
            :collapsed="collapsed"
            :collapsed-width="64"
            :collapsed-icon-size="22"
            :options="menuOptions"
            :render-label="renderMenuLabel"
            :render-icon="renderMenuIcon"
            :expand-icon="expandIcon"
            :active-key="activeKey"
        />
    </NLayoutSider>
</template>
<script setup lang="ts">
import { NLayoutSider, NMenu, MenuOption, NIcon } from "naive-ui"
import { ref, h, Component } from "vue"
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
} from "@vicons/ionicons5"

let collapsed = ref<boolean>(false)
let activeKey = ref<string | null>("home")

const renderMenuLabel = (option: MenuOption) => {
    if ("path" in option) {
        return h("RouterLink", { path: option.path }, option.label as string)
    }
    return option.label as string
}

const renderMenuIcon = (option: MenuOption) => {
    // 渲染图标占位符以保持缩进
    if (option.key === "sheep-man") return true
    // 返回 falsy 值，不再渲染图标及占位符
    if (option.key === "food") return null
    return h(NIcon, null, { default: () => h(BookIcon) })
}

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

const expandIcon = () => {
    return h(NIcon, null, { default: () => h(PersonIcon) })
}

//test data
let menuOptions: MenuOption[] = [
    {
        label: "首页",
        path: "/",
        key: "home",
        name: "home",
        icon: renderIcon(BookIcon),
    },
    {
        label: "文章",
        path: "/article",
        key: "article",
        icon: renderIcon(PersonIcon),
    },
    {
        label: "关于",
        key: "about",
        path: "/about",
        icon: renderIcon(WineIcon),
    },
]
</script>
