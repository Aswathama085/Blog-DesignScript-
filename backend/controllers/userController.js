const User = require("../Schema/userSchema");

exports.registerUser = async (req, res, next) => {
    const { name, email, password } = req.body;
  
    const user = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
        success:true,
        message:"User created successfully",
        user
    })
};  