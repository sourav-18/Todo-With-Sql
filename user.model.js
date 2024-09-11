const { DataTypes } = require("sequelize");
const sequelize=require("./conn.model")

const userModel=sequelize.define('users',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    mobileNo:{
        type:DataTypes.BIGINT,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

userModel.sync();
module.exports=userModel;