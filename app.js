const express=require("express");
require("./models/conn.model")
const app=express();

app.use(express.json())

const authRouter = require("./routes/auth.routes");
const todoRouter = require("./routes/todo.routes");
app.use("/auth",authRouter)
app.use("/todo",todoRouter)

app.listen(4000)
