const mongoose = require('mongoose');
  


// Connect to the database

const connectDB = async()=>{
  try{
    await mongoose.connect(process.env.DATA_URL,{
      useNewUrlParser: true,
              useUnifiedTopology: true,
    })
    console.log("MongoDB connected...")
    
  }catch(err)
  {
    console.log("error",err)
  }
}

module.exports = connectDB;