// create all schemas means type of data user will gonna send

const zod = require("zod");

const createTodo =zod.object({
    title:zod.string(),
    description:zod.string(),
    completed:zod.boolean()
}) 

const updateTodo =zod.object({
    _id:zod.string()
})


module.exports = {
    createTodo:createTodo,
    updateTodo:updateTodo
}