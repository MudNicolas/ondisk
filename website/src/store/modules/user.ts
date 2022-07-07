import md5 from "js-md5"
import { loginUserData } from "@/type/index"
import { userInfoData } from "@/type"
import { handleLogin, handleGetUserInfo } from "@/api/user"
import { ActionContext } from "vuex"

const state: userInfoData = {
    nickname: "",
    username: "",
    avatar: "",
    token: "",
    role: "",
    uid: "",
}

const mutations = {
    SET_NICKNAME: (state: userInfoData, nickname: string) => {
        state.nickname = nickname
    },
    SET_USERNAME: (state: userInfoData, username: string) => {
        state.username = username
    },
    SET_AVATAR: (state: userInfoData, avatar: string) => {
        state.avatar = avatar
    },
    SET_TOKEN: (state: userInfoData, token: string) => {
        state.token = token
    },
    SET_ROLE: (state: userInfoData, role: string) => {
        state.role = role
    },
    SET_UID: (state: userInfoData, uid: string) => {
        state.uid = uid
    },
}

const actions = {
    handleLogin({ commit }: ActionContext<userInfoData, any>, loginUserData: loginUserData) {
        const { username, password, role } = loginUserData
        return new Promise((resolve, reject) => {
            handleLogin({ username: username.trim(), password: md5(password), role: role })
                .then(response => {
                    const { data } = response
                    commit("SET_TOKEN", data.token)
                    resolve(true)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    resetToken({ commit }: ActionContext<userInfoData, any>) {
        return new Promise((resolve, reject) => {
            commit("SET_TOKEN", "")
            resolve(true)
        })
    },
    getInfo({ commit }: ActionContext<userInfoData, any>) {
        return new Promise((resolve, reject) => {
            handleGetUserInfo()
                .then(response => {
                    const { data } = response
                    commit("SET_NICKNAME", data.nickname)
                    commit("SET_USERNAME", data.username)
                    commit("SET_AVATAR", data.avatar)
                    commit("SET_ROLE", data.role)
                    commit("SET_UID", data.uid)
                    resolve(true)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
