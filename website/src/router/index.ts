import { createRouter, createWebHistory } from "vue-router"
import { RouteRecordRaw } from "vue-router"

import constantRoutes from "./modules/constant"
import userRoutes from "./modules/user"

export const asyncRoutes: RouteRecordRaw[] = [...userRoutes]

//TODO:添加动态路由

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes,
})

export default router
