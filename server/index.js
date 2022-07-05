import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"

const app = express()
app.use(
    cors({
        origin: "http://localhost:8000",
        credentials: true,
    })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect("mongodb://localhost:27017").then(() => {
    app.listen(8080)
})
