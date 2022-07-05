<template>
    <NLayoutHeader>
        <BreadCrumb />
        <NDropdown trigger="click" :show-arrow="true" :options="options" @select="handleSelect">
            <NAvatar size="large" class="avatar">M</NAvatar>
        </NDropdown>
    </NLayoutHeader>
</template>
<script setup lang="ts">
import { NLayoutHeader, NAvatar, NDropdown } from "naive-ui"
import BreadCrumb from "./bread_crumb.vue"

const options = [
    {
        label: "个人信息",
        key: "intro",
    },
    {
        label: "退出登录",
        key: "logout",
    },
]

const handleSelect = () => {}
</script>
<style lang="scss">
.n-layout-header,
.n-layout-footer {
    height: 48px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .avatar {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
}
</style>
