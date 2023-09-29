const mongoose = require('mongoose');

const jobseekerschema=new mongoose.Schema({
  firstname:{
    type: String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
  },
  password:{
    type:String,
    required:true
  },
})
const Jobseeker= mongoose.model('USER',jobseekerschema);

module.exports =  Jobseeker;