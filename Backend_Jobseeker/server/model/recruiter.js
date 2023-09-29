const mongoose = require('mongoose');
const Schema= mongoose.Schema;


const recruiterschema=new Schema({
  Select_Your_Sector:{
    type:String,
    required:true
  },
  Add_Your_Logo:{
    type:String,
    required:true
  },
  Company_Title:{
    type:String,
    required:true
  },
  Sector:{
    type:String,
    required:true
  },
  FirstName :{
    type: String,
    required:true
  },
  LastName :{
    type:String,
    required:true
  },
  Location:{
    type:String,
    required:true
  },
  EmailAddress:{
    type:email,
    required:true
  },
  Password:{
    type:password,
    required:true
  },
  ConfirmPassword:{
    type:password,
    required:true
  }


})