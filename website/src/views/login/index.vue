<script setup lang="ts">
import { NInput, NSpace, NIcon, NButton } from "naive-ui"
import { Person, FingerPrintOutline, CloudCircle, GlassesOutline, Glasses } from "@vicons/ionicons5"
import { ref } from "vue"

const loading = ref(false)

const handleClick = () => {
    loading.value = true
    console.log(1)
    setTimeout(() => {
        loading.value = false
    }, 1000)
}
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <NSpace vertical :size="12">
                <div class="logo-wrapper">
                    <NIcon :component="CloudCircle" size="64" color="#0e7a0d" />
                </div>

                <NInput size="large" round placeholder="Username">
                    <template #prefix>
                        <NIcon :component="Person" />
                    </template>
                </NInput>
                <NInput
                    size="large"
                    round
                    placeholder="Password"
                    type="password"
                    show-password-on="mousedown"
                >
                    <template #prefix>
                        <NIcon :component="FingerPrintOutline" />
                    </template>
                    <template #password-visible-icon>
                        <n-icon :size="16" :component="GlassesOutline" />
                    </template>
                    <template #password-invisible-icon>
                        <n-icon :size="16" :component="Glasses" />
                    </template>
                </NInput>
                <NButton
                    round
                    type="primary"
                    style="width: 100%"
                    :loading="loading"
                    @click="handleClick"
                >
                    Login
                </NButton>
            </NSpace>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .wrapper {
        width: 264px;

        .logo-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>

<style>
input[type="password"]::-ms-reveal {
    display: none;
}
</style>
