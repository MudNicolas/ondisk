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
import { ref, h, Component, computed } from "vue"
import { useRouter, RouterLink } from "vue-router"
import { useStore } from "vuex"

let collapsed = ref<boolean>(false)
let activeKey = ref<string | null>("home")
const store = useStore()
const menuOptions = store.state.menuOption.menuOptions

const renderMenuLabel = (option: MenuOption) => {
    if ("path" in option) {
        return h("Router-Link", { path: option.path }, option.label as string)
    }
    return option.label as string
}
const renderMenuIcon = (option: MenuOption) => {
    // 渲染图标占位符以保持缩进
    //if (option.key === "sheep-man") return true
    // 返回 falsy 值，不再渲染图标及占位符
    //if (option.key === "food") return null
    return h(NIcon, null, { default: () => h(<Component>option.icon) })
}
const expandIcon = (option: MenuOption) => {
    return h(NIcon, null, { default: () => h(<Component>option.icon) })
}
</script>

<style scoped lang="scss">
.n-layout-sider {
    border-right: 1px solid #e6e6e6;
}
</style>
