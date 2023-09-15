const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

dotenv.config({path:'./config.env'})
const PORT = process.env.PORT;

require('./db/connection');


const middleware = (req,res,next)=>{
       console.log("Good morning Sir");
       next();
}

app.get('/', (req, res)=>{
      res.send("Good Morning");
});
app.get('/about', middleware, (req, res)=>{
      res.send("Good about");
});
app.get('/services', (req, res)=>{
      res.send("Good services");
});
app.get('/contact', (req, res)=>{
      res.send("Good contact");
});



app.listen(PORT,()=>{
     console.log(`server is running at post no: http://localhost:${PORT}`);
})
