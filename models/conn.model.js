const { Sequelize} = require("sequelize");
const sequelize = new Sequelize("shop_me", "root", "sourav", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then((data) => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
module.exports=sequelize;
