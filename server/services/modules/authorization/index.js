import Router from "express"

import User from "#models/User.js"
import Verification from "#models/Verification.js"

import { AESDecode } from "#services/tools/index.js"

let router = Router()

router.use(async (req, res, next) => {
    let token = req.headers.token

    let dec = AESDecode(token)

    if (dec === 0) {
        res.json({
            code: 50008,
            message: "token失效，请重新登录",
        })
        return
    }
    let { uid, loginTime, role } = dec
    let loginCheck = await Verification.findOne({
        uid: uid,
        loginTime: loginTime,
        role: role,
        logout: false,
    }).exec()

    if (!loginCheck) {
        res.json({
            code: 50008,
            message: "token失效，请重新登录",
        })
        return
    }

    User.findById(uid)
        .select("isUsed role")
        .then(v_user => {
            if (!v_user || !v_user.isUsed || !v_user.role.includes(role)) {
                res.json({
                    code: 60205,
                    message: "该用户或角色不存在",
                })
                return
            }
            loginCheck.latestOperationTime = new Date()
            loginCheck.save(err => {
                if (err) {
                    res.json({
                        code: 30001,
                        message: "DataBase Error",
                    })
                    return
                }
                req.uid = uid
                req.role = role
                req.loginInfo = loginCheck
                next()
            })
        })
})

export default router
