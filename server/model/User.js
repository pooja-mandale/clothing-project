const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "user" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    resetOtp: { type: String },
    resetOtpExpire: { type: Date }
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)


