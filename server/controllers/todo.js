const Todo = require('../Model/todo');

//find all todo
exports.getAllTodo = async(req,res)=>{

     try{
    await Todo.find()
    .then((data)=>{
      res.json({
        mes:"find succesfully",
        data:data

      })
    })
     }catch(err){
          res.status(400).json({
            mes:"Todo not Found",
            message:err
          })
     }
}

//create all todo
exports.addTodo = async (req,res)=>{
  const{title,  description}= req.body;
   
  try{
    await Todo.create({title,description})
    .then((data)=>{
     res.status(201).json({
       message:"Todo has been created successfully!",
       data:data
     })
    })
  }catch(err){
    res.status(500).json({
      message: message.err
    })
  }
}


//delete  a specific todo by id

exports.deleteTodo=async (req,res)=>{

  try{

    Todo.findByIdAndDelete(req.params.id)
    .then((data)=>{
      res.status(201).json({
        mes:"Deleted Successfully",
        data:data
      })
    })
  }catch(err){
     res.status(404).json({
       message:"The specified resource could not be found."
     });
  }
}

//updat todo
exports.updateTodo = async(req,res)=>{

  try{
    Todo.findByIdAndUpdate(req.params.id,req.body)
  .then((data)=>{
  res.status(201).json({
    msg:"update succsfully",
    data:data
  })
  })
  }catch(err){
    res.status(404).json({
      mes:err+mes
    })
  }
}

