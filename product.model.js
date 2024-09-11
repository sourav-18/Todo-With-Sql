const { DataTypes } = require("sequelize");
const sequelize=require("./conn.model")

const sealerModel=sequelize.define('products',{
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sealerId:{
        type:DataTypes.BIGINT,
        // references:'sealers',
    
        
    },
    stock:{
        type:DataTypes.BIGINT,
        allowNull:false,
    }
})

productModel.sync();
module.exports=productModel;