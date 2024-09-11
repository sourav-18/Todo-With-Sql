const { DataTypes, INTEGER, Sequelize } = require("sequelize");
const sequelize=require("./conn.model")
const todoModel = sequelize.define(
  'todos',
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   status:{
    type:DataTypes.ENUM,
    values: ['1','2'],
   },
   isComplete:{
    type:DataTypes.ENUM,
    values: ['1','2'] //1 active 2 inactive 
   },
   startingDate:{
    type:DataTypes.DATE,
    allowNull:false
   },
   endingDate:{
    type:DataTypes.DATE,
    allowNull:false
   },
   userBy:{
    type:DataTypes.INTEGER,
    references:{model:'users',key:'id'},
    allowNull:false
   }

  },
  {
  },
);
todoModel.sync();
module.exports=todoModel;

