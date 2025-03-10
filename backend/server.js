const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./database");
const port = 2000;
const app = express();
app.use(express.json());

// create todo
app.post("/todo",async function(req,res){
    const createPayload = req.body;
    const parsedPayload  = createTodo.safeParse(createPayload);
    
    if(!parsedPayload.success){
       res.status(411).json({
        message:"You put wrong inputs"
       })
       return ;
    }

    try {
        const save = await Todo.create(parsedPayload.data);
        if(!save){
            res.status(411).json({
                message:"error to save the todo"
            })
            return;
        }

        res.status(200).json({message:"Todo created successfully"})


    } catch (error) {
        res.status(411).json({message:"error from org"})
    }

})


// get all todos 
app.get("/todos",async function(req,res){

 const todos = await Todo.find();
 res.status(200).json(todos)

})

// mark as completed
app.put("/completed",async function(req,res){

    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({
            message:"You put wrong inputs"
        });     
        return ;
    }
    
    try {
        await Todo.findByIdAndUpdate(parsedPayload.data,{$set:{completed:true}})
        res.status(200).json({message:"task completed as true"})
    } catch (error) {
        res.status(411).json({message:"todo not found"})
    }
})

app.listen(port,()=>{
    console.log("server is running")
})