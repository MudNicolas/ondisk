import request from "@/utils/request"
import { loginUserData } from "@/type/index"

export const handleLogin = (data: loginUserData) => {
    return request({
        url: "/login",
        method: "post",
        data,
    })
}
