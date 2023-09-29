const express = require('express');
const router = express.Router();

require('../db/connection');
const Jobseeker = require('../model/Jobseeker');
// const Recuiter = require('../model/recruiter');

const middleware = (req, res, next) => {
    console.log("Good morning Sir");
    next();
}


router.get('/', (req, res) => {
    res.send("Good Morning Gurjar");
});
router.get('/about', middleware, (req, res) => {
    res.send("Good about");
});

// Jobseeker sign up page

router.post('/Jobseekersignup', async (req, res) => {

    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return res.status(410).json({ error: "Plese filled  colums" });
    }

    try {
        const userExits = await Jobseeker.findOne({ email: email });
        if (userExits) {
            return res.status(411).json({ error: "User Already Exits" });
        }

        const Jobseekerdata = new Jobseeker({ firstname, lastname, email, password });

        
        await Jobseekerdata.save();

        res.status(201).json({ message: "Data Store successfuly" });

    }
    catch (err) {
        console.log(err);
    }
});


// Recuiter signup page

// router.post('/recruitersignup',(req,res)=>{

//     const {firstname, lastname, email, password} = req.body;

//     if(!firstname || !lastname || !email || !password){
//        return  res.status(410).json({error :"Plese filled  colums"});
//     }

//     Recuiter.findOne({email:email}).then((userExits)=>{
//        if(userExits){
//            return  res.status(411).json({error :"User Already Exits"});
//        }

//        const RecuiterData = new Jobseeker({firstname,lastname,email,password});

//        RecuiterData.save().then(()=>{
//             res.status(201).json({message:"Data Store successfuly"});
//        }).catch((err)=>{
//             res.staus(500).json({message:"Failed to store data in database"});
//        });

//     }).catch((err)=>{
//          console.log(err);
//     })
// })


module.exports = router;