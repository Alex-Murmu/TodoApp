const express = require("express");
const port = 2000;
const app = express();
app.use(express.json());

// create todo
app.post("/todo",function(req,res){

})


// get all todos 
app.get("/todos",function(req,res){

})

// mark as completed
app.put("/completed",function(req,res){
    
})

app.listen(port,()=>{
    console.log("server is running")
})