import request from "@/utils/request"
import { loginUserData } from "@/type/index"
import { AxiosPromise } from "axios"

export function handleLogin(data: loginUserData): AxiosPromise<any> {
    return request({
        url: "/login",
        method: "post",
        data,
    })
}

export function handleGetUserInfo(): AxiosPromise<any> {
    return request({
        url: "/user/info/get",
        method: "get",
    })
}
