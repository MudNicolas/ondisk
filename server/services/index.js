import express from "express"
import login from "./modules/login/index.js"
import auth from "./modules/authorization/index.js"
import user from "./modules/user/index.js"

const router = express()

router.use("/login", login)
router.use(auth)
router.use("/user", user)

export default router
