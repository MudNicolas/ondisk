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
