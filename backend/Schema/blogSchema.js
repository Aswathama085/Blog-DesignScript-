const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    title:{
        type:String,
        required:[true,"Please enter a title"]
    },
    article:{
        type:String,
        required:[true,"Please type something here"]
    },
    tags:{
        type:String,
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Blog",blogSchema);