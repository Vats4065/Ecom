const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    role: { type: String, enum: ["admin", "user"], default: "user" }
});

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel