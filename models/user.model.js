const { DataTypes } = require("sequelize");
const sequelize=require("./conn.model")
const userModel = sequelize.define(
  'users',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    mobile:{
      type:DataTypes.BIGINT,
      allowNull:false
    }
  },
  {
  },
);
userModel.sync();
module.exports=userModel;

