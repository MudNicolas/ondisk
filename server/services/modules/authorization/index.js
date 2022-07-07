import Router from "express"
import { User } from "#models/index.js"

let router = Router()

router.use((req, res, next) => {
    //TODO:verify with nanoid(token)
})

export default router
