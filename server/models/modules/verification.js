import mongoose from "mongoose"

export default mongoose.model(
    "Verification",
    new mongoose.Schema({
        uid: mongoose.Schema.Types.ObjectId,
        time: Date,
        role: String,
    })
)
