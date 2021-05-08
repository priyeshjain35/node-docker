const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: [true, "User name is must"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Password is must"]
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;