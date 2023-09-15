const mongoose = require('mongoose');


const userSudentSchema = new mongoose.Schema({
       firstName :{
         type : String,
         required: true
       },
       lastName :{
         type : String,
         required: true
       },
       email:{
         type: String,
          required:true
       },
       password:{
         type: String,
         require : true
       }

})