<script setup lang="ts">
import { NLayoutHeader, NAvatar, NDropdown } from "naive-ui"
import { useStore } from "vuex"
import BreadCrumb from "./bread_crumb.vue"
import { userInfoData } from "@/type"

const store = useStore()
const userState: userInfoData = store.state.user
const options = [
    {
        label: "个人信息",
        key: "intro",
    },
    {
        label: "退出登录",
        key: "logout",
        props: {
            onClick: () => {
                store.dispatch("user/resetToken").then(() => {
                    window.location.reload()
                })
            },
        },
    },
]
</script>

<template>
    <NLayoutHeader>
        <BreadCrumb />
        <NDropdown trigger="click" :show-arrow="true" :options="options">
            <NAvatar v-if="store.state.user.avatar" size="large" class="avatar">M</NAvatar>
            <NAvatar v-else size="large" class="avatar">{{ userState.nickname[0] }}</NAvatar>
        </NDropdown>
    </NLayoutHeader>
</template>

<style lang="scss" scoped>
.n-layout-header,
.n-layout-footer {
    height: 48px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;

    .avatar {
        width: 32px;
        height: 32px;
        cursor: pointer;
    }
}
</style>
