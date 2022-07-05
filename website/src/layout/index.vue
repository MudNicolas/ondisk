<template>
    <NLayout has-sider position="absolute">
        <SiderBar />
        <NLayout>
            <Header></Header>
            <NLayoutContent NLayoutContent content-style="padding: 24px;">
                <RouterView />
            </NLayoutContent>
        </NLayout>
    </NLayout>
</template>
<script setup lang="ts">
import { NLayout, NLayoutContent } from "naive-ui"
import Header from "./components/header.vue"
import SiderBar from "./components/sidebar.vue"
</script>
<style scoped lang="scss">
.n-layout-header,
.n-layout-footer {
    height: 48px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    padding: 16px;
    .avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin-right: 12px;
    }
}

.n-layout-sider {
    border-right: 1px solid #e6e6e6;
}
</style>
