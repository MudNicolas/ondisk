import express from "express"
import login from "./modules/login/index.js"
import auth from "./modules/authorization/index.js"

const router = express()

router.use("/login", login)
router.use(auth)

export default router
