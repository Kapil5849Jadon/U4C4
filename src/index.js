const express = require("express");
const connect = require("./configs/db");
const userController = require("./controllers/user.controller");
const  todoController = require("./controllers/ToDo.controller");
const {register, login} = require("./controllers/auth.controller");
const app = express();
// console.log(app)
app.use(express.json());

app.use("/users" , userController);
app.post("/register" , register);
app.post("/login", login)

app.get("/todos", (req, res)=>{

})

app.listen(5050, async function(){
    try{
    await connect();
    console.log("listening to the port 5050")
    }catch(err){
        console.log(err.message)
    }
    console.log("listening to the port 5050")
});