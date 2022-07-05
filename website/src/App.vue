<template>
    <n-loading-bar-provider>
        <router-view />
    </n-loading-bar-provider>
</template>
<script setup lang="ts">
import { NLoadingBarProvider } from "naive-ui"
</script>
