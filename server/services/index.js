import express from "express"
import login from "./modules/login/index.js"

const router = express()

router.use("/login", login)

export default router
