export default [
    {
        path: "/redirect",
        name: "redirect",
        component: "@/layout/index.vue",
        hidden: true,
        children: [
            {
                path: ":path(.*)",
                component: "@/views/redirect/index.vue",
            },
        ],
    },
    {
        path: "/401",
        name: "401",
        hidden: true,
        component: "@/views/error-page/401.vue",
        meta: {
            title: "401",
        },
    },
    {
        path: "/404",
        name: "404",
        hidden: true,
        component: "@/views/error-page/404.vue",
        meta: {
            title: "404",
        },
    },
]
