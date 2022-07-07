import express from "express"

const router = express()

router.get("/info/get", (req, res) => {
    res.json({
        code: 0,
        data: {
            role: "user",
        },
    })
})

export default router
