export default [
    {
        path: "/",
        name: "home",
        redirect: "/drive",
        hidden: true,
    },
    {
        path: "/drive",
        name: "drive",
        component: "@/layout/index.vue",
        meta: {
            role: "user",
            icon: "BookOutline",
            title: "我的网盘",
        },
    },
    {
        path: "/fav",
        name: "favorite",
        component: "@/layout/index.vue",
        meta: {
            role: "user",
            icon: "PersonOutline",
            title: "收藏",
        },
    },
    {
        path: "/share",
        name: "share",
        component: "@/layout/index.vue",
        meta: {
            role: "user",
            icon: "WineOutline",
            title: "分享",
        },
    },
]
