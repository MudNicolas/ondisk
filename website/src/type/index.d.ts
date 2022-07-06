import { Component } from "vue"

export declare type route = routeRaw | routeWithChildren

export declare type routeRaw = {
    path: string
    key: string | number
    component?: Component
    hidden?: boolean
    meta?: {
        title: string
        icon?: string
        role?: string
    }
}

export declare type routeWithChildren = route & {
    children: route
}
