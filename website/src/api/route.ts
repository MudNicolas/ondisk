import request from "@/utils/request"
import { AxiosPromise } from "axios"

export function handleGetRoute(): AxiosPromise<any> {
    return request({
        url: "/route/get",
        method: "get",
    })
}
