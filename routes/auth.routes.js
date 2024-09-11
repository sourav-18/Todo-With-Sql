const authController = require("../controller/auth.controller");

const router=require("express").Router();
router.post("/signup",authController.signUp);
router.post("/login",authController.logIn);

module.exports=router;