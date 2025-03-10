const express = require("express");
const port = 2000;
const app = express();
app.use(express.json());



app.listen(port,()=>{
    console.log("server is running")
})