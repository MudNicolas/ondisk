<template>
    <NLayout>
        <NLayoutHeader>颐和园路</NLayoutHeader>
        <NLayout has-sider>
            <NLayoutSider
                bordered
                collapse-mode="width"
                :collapsed-width="64"
                :width="240"
                :collapsed="collapsed"
                show-trigger
                @collapse="collapsed = true"
                @expand="collapsed = false"
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
            <NLayoutContent NLayoutContent content-style="padding: 24px;">平山道</NLayoutContent>
        </NLayout>
    </NLayout>
</template>
<script setup lang="ts">
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NLayoutSider,
    MenuOption,
    NIcon,
    NMenu,
} from "naive-ui"
import { ref, Component, h } from "vue"
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon,
} from "@vicons/ionicons5"
let collapsed = ref<boolean>(false)
let activeKey = ref<string | null>("home")
function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) })
}
const renderMenuLabel = (option: MenuOption) => {
    if ("href" in option) {
        return h("a", { href: option.href, target: "_blank" }, option.label as string)
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
const expandIcon = () => {
    return h(NIcon, null, { default: () => h(PersonIcon) })
}
let menuOptions: MenuOption[] = [
    {
        label: "首页",
        path: "/",
        key: "home",
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
<style scoped>
.n-layout-header,
.n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    background: rgba(128, 128, 128, 0.4);
}
</style>
