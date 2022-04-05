const mongoose = require("mongoose");

module.exports = mongoose.model(
    "remind",
    new mongoose.Schema({
        User: String,
        Time: Number,
        Type: String,
        Region: String
    })
)