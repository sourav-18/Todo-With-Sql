const { DataTypes } = require("sequelize");
const sequelize=require("./conn.model")

const sealerModel=sequelize.define('sealers',{
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

sealerModel.sync();
module.exports=sealerModel;