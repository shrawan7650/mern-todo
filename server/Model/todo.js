const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  title:{
    type:String,
    requried:true
  },
  description:{
    type:String,
  }
})
const Todo = mongoose.model('Todo',TodoSchema)
module.exports = Todo;