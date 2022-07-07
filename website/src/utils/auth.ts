import store from "@/store"

export const getToken = () => store.state.user.token
