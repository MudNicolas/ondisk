import { RouteRecordRaw } from "vue-router"
import { Component } from "vue"

export declare type route = routeRaw | routeWithChildren

export declare type routeRaw = {
    path: string
    key: string | number
    component?: Component
    hidden?: boolean
    redirect?: string
    meta?: {
        title: string
        icon?: string
        role?: string
    }
}

export declare type routeWithChildren = routeRaw & {
    children: routeRaw[]
}

export declare type userInfoData = {
    nickname: string
    username: string
    avatar: string
    token: string
    role: string
    uid: string
}

export declare type loginUserData = {
    username: string
    password: string
    role: string
}

export declare type routeState = {
    routes: RouteRecordRaw[]
    addRoutes: RouteRecordRaw[]
}
