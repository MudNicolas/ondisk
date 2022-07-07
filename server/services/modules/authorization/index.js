import Router from "express"
import { User } from "#models/index.js"

import { genShaStringAndSalt } from "#utils/index.js"

let router = Router()

router.get("/createUser", (req, res) => {
    let { value: password, salt } = genShaStringAndSalt("e10adc3949ba59abbe56e057f20f883e")
    let user = new User({
        username: "Nicolas",
        password,
        nickname: "Nicolas",
        role: ["user"],
        salt,
        registerTime: new Date(),
    })
    user.save((err, doc) => {
        if (err) {
            res.json({
                code: 1,
                msg: err,
            })
        } else {
            res.json({
                code: 0,
                data: doc,
            })
        }
    })
})

export default router
