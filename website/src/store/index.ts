import { createStore } from "vuex"
import user from "./modules/user"
import menuOption from "./modules/sideMenu"

export default createStore({
    modules: {
        user,
        menuOption,
    },
})
