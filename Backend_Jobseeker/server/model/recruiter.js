const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const recruiterschema=new Schema({
  
  company_title:{
    type:String,
    required:true
  },
  firstname :{
    type: String,
    required:true
  },
  lastname :{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
})
const Recuiter = mongoose.model('RecuiterUser',recruiterschema);

module.exports =  Recuiter;