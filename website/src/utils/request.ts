// axios interrupts the flow of the program and waits for the response
import axios from "axios"
import { createDiscreteApi, DialogReactive } from "naive-ui"
import { getToken } from "@/utils/auth"
import router from "@/router"
import store from "@/store"

const { message, dialog } = createDiscreteApi(["message", "dialog"])

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_HOST + process.env.VUE_APP_BASE_API, // url = base url + request url
    withCredentials: false, // send cookies when cross-domain requests
    timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (config?.headers && store.state.user.token) {
            // let each request carry token
            // ['token'] is a custom headers key
            // please modify it according to the actual situation
            config.headers["token"] = getToken()
        }
        // console.log(config)
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        message.error(error)
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {
            message.error(res.message || "Error", { duration: 5000 })

            //401 404
            if (res.code === 401 || res.code === 404) {
                router.push(`/${res.code}`)
            }

            // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
            if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
                // to re-login
                const d: DialogReactive = dialog.error({
                    title: "错误",
                    content: "错了",
                    positiveText: "啊",
                    onPositiveClick: () => {
                        d.loading = true
                        store.dispatch("user/resetToken").then(() => {
                            location.reload()
                        })
                    },
                })
            }
            return Promise.reject(new Error(res.message || "Error"))
        } else {
            return res
        }
    },
    error => {
        message.error(error.message, {
            duration: 5 * 1000,
        })
        return Promise.reject(error)
    }
)

export default service
