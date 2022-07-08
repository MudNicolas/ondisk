import express from "express"
import { User } from "#models/index.js"

const router = express()

router.get("/info/get", async (req, res) => {
    //TODO: Get user info
    const { uid, role } = req
    const user = await User.findById({ _id: uid })
        .select({
            username: 1,
            avatar: 1,
            nickname: 1,
            introduction: 1,
        })
        .exec()
    const data = {
        username: user.username,
        avatar: user.avatar,
        nickname: user.nickname,
        introduction: user.introduction,
        role: role,
        uid: user._id,
    }
    res.json({
        code: 0,
        data,
    })
})

export default router
