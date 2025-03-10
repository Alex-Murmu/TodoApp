const mongoose = require("mongoose");
const { boolean } = require("zod");

const connection =async()=>{
    try {
        await mongoose.connect("mongodb+srv://ftalexrayen:2frdH6xQ0HoEIpXz@cluster0.ew5fs.mongodb.net/Todos")
        console.log("Database is live")
    } catch (error) {
        console.log(error.message);
    }
}

connection();
const TodoSchema = new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const Todo = new mongoose.model("Todos",TodoSchema);

module.exports = {
    Todo:Todo
}