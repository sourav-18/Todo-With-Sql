const todoModel = require("../models/todo.model");

exports.addTodo=async(req,res)=>{
    const {title,description,status,isComplete,startingDate,endingDate,userBy}=req.body;
    const newTodo=todoModel.build({title,description,status,isComplete,startingDate,endingDate,userBy});
    await newTodo.save();
    return res.json(newTodo);
}

exports.showTodo=async(req,res)=>{
    const {userId}=req.params;
    const list=await todoModel.findAll({where:{userBy:userId}});
    res.json(list);
}

exports.updateTodo=async(req,res)=>{
    const {id}=req.params;
    const update=await todoModel.update({title:"update"},{where:{id:id}})
    return res.json(update);
}
exports.deleteTodo=async(req,res)=>{
    const {id}=req.params;
    const deleteData=await todoModel.destroy({where:{id:id}});
    return res.json(deleteData);
}

