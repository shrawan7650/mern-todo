const express = require('express');
const app = express();
const ConnectDB = require("./config/db")
require('dotenv').config();
const router = require('./routes/todo')

var cors = require('cors') 
app.use(cors())


app.use(express.json());
app.get('/',(req,res)=>{
  res.send("hii my name is shrawan")

})
//mount app
app.use('/api/todo',router)

// setting up port
const port = process.env.PORT||4000
app.listen(port,()=>{
  console.log(`server started on port ${port}`);
})

//call connection for db

ConnectDB();