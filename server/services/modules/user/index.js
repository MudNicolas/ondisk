import express from "express"
import { User } from "#models/index"

const router = express()

router.get("/info/get", (req, res) => {
    //TODO: Get user info
    res.json({
        code: 0,
        data: {
            role: "user",
        },
    })
})

export default router
