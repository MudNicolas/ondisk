import { Component } from "vue"

export declare type route = {
    component: Component
    path: string
    key: string | number
    meta: {
        title: string
        icon?: string
        role?: string
    }
}
