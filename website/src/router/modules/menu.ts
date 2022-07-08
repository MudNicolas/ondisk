import store from "@/store"
import { h } from "vue"
import { NIcon } from "naive-ui"
import { BookOutline } from "@vicons/ionicons5"
import { RouterLink } from "vue-router"

export default function (menuOptions: any[]) {
    console.log(menuOptions)
    store.dispatch(
        "menuOption/handleSetMenuOptions",
        menuOptions.map(e => ({
            label: () => h(RouterLink, { to: { path: e.path } }, { default: () => e.label }),
            key: e.key,
            icon: () => h(NIcon, null, { default: () => h(BookOutline) }),
        }))
    )
}
