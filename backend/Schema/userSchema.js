const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Your Name"],
        maxLength: [30, "Name cannot be more than 30 characters"],
        minLength: [4, "Name cannot be less than 4 characters"],
      },
      email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true,
        validator: [validator.isEmail, "Please enter a valid email"],
      },
      password: {
        type: String,
        required: [true, "Please Enter Your Password"],
        minLength: [8, "Password should be more than 8 characters"],
        select: false,
      },
      createdAt: {
        type: Date,
        deafult: Date.now,
      },

})

module.exports = mongoose.model("User",userSchema);