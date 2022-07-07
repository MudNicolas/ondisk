import { createRouter, createWebHistory } from "vue-router"

import constantRoutes from "./modules/constant"

//TODO:添加动态路由

export const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes,
})

export { default as userRoutes } from "./modules/user"
export { default as constantRoutes } from "./modules/constant"

export default router
