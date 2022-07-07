import express from "express"

const router = express()

router.post("/", (req, res) => {
    res.json({
        code: 20000,
        data: {
            token: 123,
        },
    })
})

export default router
