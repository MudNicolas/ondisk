import { ActionContext } from "vuex"

const state = {
    menuOptions: [],
}

const mutations = {
    SET_MENU_OPTIONS: (state: any, menuOptions: any) => {
        state.menuOptions = menuOptions
    },
}

const actions = {
    handleSetMenuOptions({ commit }: ActionContext<any, any>, menuOptions: any) {
        commit("SET_MENU_OPTIONS", menuOptions)
    },
    handleClearMenuOptions({ commit }: ActionContext<any, any>) {
        commit("SET_MENU_OPTIONS", [])
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}
