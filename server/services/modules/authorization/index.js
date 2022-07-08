import Router from "express"
import { User, Verification } from "#models/index.js"

let router = Router()

router.use(async (req, res, next) => {
    const token = req?.headers?.token
    console.log(req.headers.token)
    if (!token) {
        return res.json({
            message: "口令错误",
            code: -1,
        })
    }
    try {
        const verification = await Verification.findOne({ sessionID: token })
            .select({
                uid: 1,
                role: 1,
            })
            .exec()
        if (!verification) {
            return res.json({
                message: "口令错误",
                code: -2,
            })
        }
        req.uid = verification.uid
        req.role = verification.role
        next()
    } catch (err) {
        console.log(err)
        return res.json({
            message: err.message,
        })
    }
})

export default router
