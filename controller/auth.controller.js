const userModel = require("../models/user.model");

exports.signUp = async(req, res) => {
  const { name, mobile, password ,email} = req.body;
  const isUserExist=await userModel.findOne({where:{mobile:mobile}});
  if(isUserExist){
    return res.json({error:"user already exist"})
  }
  const newUser= userModel.build({name:name,email:email,mobile:mobile,password:password})
  await newUser.save();
  console.log(newUser);
  res.json(newUser)
  return;
};

exports.logIn=async(req,res)=>{
  const {mobile,password}=req.body;
  const isUserExist=await userModel.findOne({where:{mobile:mobile,password:password}});
  if(!isUserExist){
    return res.json({error:"user not found"});
  }
  return res.json(isUserExist)
}