//mongoose import to create new schema
const mongoose = require('mongoose');

//create schema
const TodoItemSchema = new mongoose.Schema({
    item:{
        type:String,
        required:true
    }
})

// Schema export
module.exports = mongoose.model('todo',TodoItemSchema);