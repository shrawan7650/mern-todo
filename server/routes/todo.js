const express = require('express');
const router = express.Router();

   
const{getAllTodo,addTodo,deleteTodo,updateTodo} = require('../controllers/todo')
   
//add todo
router.post('/add',addTodo);


// get all todo
router.get('/all',getAllTodo);

//delet todo
router.delete('/:id', deleteTodo)

//updat todo
router.put('/:id',updateTodo)

module.exports = router