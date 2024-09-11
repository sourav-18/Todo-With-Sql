const todoController = require("../controller/todo.controller");

const router=require("express").Router();
router.post("/create",todoController.addTodo);
router.get("/show/:userId",todoController.showTodo);
router.get("/update/:id",todoController.updateTodo);
router.get("/delete/:id",todoController.deleteTodo);


module.exports=router;