import { route } from "@/type"
import { createRouter, createWebHistory } from "vue-router"
import constantRoutes from "./modules/constant"
import userRoutes from "./modules/user"

export const asyncRoutes: route[] = [...userRoutes]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: constantRoutes,
})

export default router
