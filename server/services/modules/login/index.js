import express from "express"
import { nanoid } from "nanoid"
import { User, Verification } from "#models/index.js"
import { sha512 } from "#utils/index.js"

const router = express()

router.post("/", async (req, res) => {
    let { username, password, role } = req.body
    try {
        const user = await User.findOne({ username, isUsed: true })
            .select({
                _id: 1,
                username: 1,
                password: 1,
                salt: 1,
            })
            .exec()
        if (!user) {
            return res.json({
                message: "用户名或密码错误",
            })
        }

        let { password: dbPassword, salt, _id: uid } = user

        if (sha512(password, salt) !== dbPassword) {
            return res.json({
                message: "用户名或密码错误",
            })
        }

        const sessionID = nanoid()

        let verification = new Verification({
            uid,
            time: new Date(),
            role,
            sessionID,
        })
        await verification.save()
        return res.json({
            code: 0,
            data: { token: sessionID },
        })
    } catch (err) {
        console.log(err)
        return res.json({
            code: -1,
            message: err.message,
        })
    }
})

export default router
