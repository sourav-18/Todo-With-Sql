const express=require("express");
require("./conn.model")
const app=express();
const userController=require("./user.controller")
app.use(express.json())

app.post('/signup',userController.signup);
app.post('/sealer-signup',userController.signupSealer);

app.listen(4000)
