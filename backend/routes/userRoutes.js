const express =require("express");
const { registerUser } = require("../controllers/userController");
const router= express.Router();

router.route("/user/register").post(registerUser); //user registration route

module.exports = router;
