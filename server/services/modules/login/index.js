import express from "express"

const router = express()

router.post("/", (req, res) => {
    res.json({
        code: 0,
        data: {
            token: 123,
        },
    })
})

export default router
