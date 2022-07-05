import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(
    cors({
        allowedHeaders: ["X-Requested-With", "content-type", "token"],
        preflightContinue: false,
    })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, length: "8000mb" }))

mongoose.connect(
    "mongodb://127.0.0.1:27017/ondisk", // 在node.js version>=17 时，用127.0.0.1，不能用localhost
    function (err) {
        if (err) {
            console.log("fail", err)
        } else {
            console.log("success")
            /**监听http请求 */
            app.listen(8080)
        }
    }
)
