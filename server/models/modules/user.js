import mongoose from "mongoose"

export default mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        password: String,
        avatar: String,
        nickname: String,
        role: Array,
        introduction: String,
        isUsed: {
            type: Boolean,
            default: true,
        },
        salt: String,
        registerTime: Date,
    })
)
