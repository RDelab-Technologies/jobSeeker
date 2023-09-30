const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('../db/connection');
const Jobseeker = require('../model/Jobseeker');
// const Recuiter = require('../model/recruiter');
const nodemailer=require('nodemailer')
const otpGenerator=require('otp-generator')

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

// router.post('/Jobseekersignup', async (req, res) => {

//     const { firstname, lastname, email, password } = req.body;

//     if (!firstname || !lastname || !email || !password) {
//         return res.status(410).json({ error: "Plese filled  colums" });
//     }

//     try {
//         const userExits = await Jobseeker.findOne({ email: email });
//         if (userExits) {
//             return res.status(411).json({ error: "User Already Exits" });
//         }

//         const Jobseekerdata = new Jobseeker({ firstname, lastname, email, password });

        
//         await Jobseekerdata.save();

//         res.status(201).json({ message: "Data Store successfuly" });

//     }
//     catch (err) {
//         console.log(err);
//     }
// });


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


// Jobseeker 

router.post('/Jobseekersignup', async (req, res) => {
    try{
        const { firstname, lastname, email, password } = req.body;
    
        if(Object.keys(req.body).length==0) return res.status(400).send({status:false,msg:"please enter a data in request body"})
        
        if(!firstname) return res.status(400).send({status:false,msg:"firstname is missing"})
        
        if(typeof firstname!=="string") return res.status(400).send({status:false,message:"Please enter  firstname as a String"})
    
        if (! /^\w[a-zA-Z.\s]*$/.test(firstname)) return res.status(400).send({ status: false, msg: "The  firstname may contain only letters" });
        
        if(!lastname) return res.status(400).send({status:false,msg:"lastname is missing"})
        
        if(typeof lastname!=="string") return res.status(400).send({status:false,message:"Please enter  lastname as a String"})
    
        if (!email) return res.status(400).send({ status: false, msg: "email is missing" })

        if (typeof email !== "string") return res.status(400).send({ status: false, msg: " Please enter  email as a String" });

        if (!/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) return res.status(400).send({ status: false, msg: "Entered email is invalid" });

        let uniqueEmail=await Jobseeker.findOne({email:email})
        if (uniqueEmail) return res.status(400).send({ status: false, msg: "This email already exists" })
        if (
            password.length < 8 ||
            !/[a-z]/.test(password) || // Check for lowercase letters
            !/[A-Z]/.test(password) || // Check for uppercase letters
            !/[!@#$%^&*]/.test(password) // Check for special characters
        ) {
            return res.status(400).send({
                status: false, msg: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one special character"
            });
        }
        let uniquepassword=await Jobseeker.findOne({password:password})
        if (uniquepassword) return res.status(400).send({ status: false, msg: "This password already exists" })
        const bcryptPassword = await bcrypt.hash(password, 10);

        const jobseekerData = new Jobseeker({ firstname, lastname, email, password: bcryptPassword }); // Save it as 'password'

        await jobseekerData.save();

        res.status(201).json({ message: "Data stored successfully" });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
    });


   

router.post('/Jobseekerlogin', async (req, res) => {
    try {
        const {email,password}=req.body;
        if(!email,!password){
            return res.status(400).send({ status: false, msg: "Please provide both email and password" });  
        }

        const user=await Jobseeker.findOne({email:email});
        if(!user){
             return res.status(400).send({status:false,msg:"You enter wrong email"})
        }

        const passwordMatch=await bcrypt.compare(password,user.password);
        if(passwordMatch){
            const payload={
                userId:user._id,
                email:user.email,
            }
            const token=jwt.sign(payload,'JOB@!@%^2466',{expiresIn:'10d'});
            return res.status(200).json({status:true,msg:"Login Succesffull",token:token})
        }

        else{
            return res.status(401).json({ status: false, msg: "Incorrect password" });
        }
    
    }
    catch (err) {
                console.error(err);
                res.status(500).json({ error: "Internal Server Error" });
            }
});


//configure nodemailer
const transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'sinhakimmi622@gmail.com',
        pass:'qxee ychm ynpv neue'
    }
//store otp temporily 
})

router.post('/sendotp',async(req,res)=>{
    const { email } = req.body;
    if(!email){
        return res.status(400).json({message:'Email is required'})
    }
    const otp=otpGenerator.generate(6,{digits:true,uppercase:false,specialChars:false});
        // Save the OTP to the database
        await Jobseeker.updateOne({ email: req.body.email }, { otp });
    const mailOptions = {
    from: "kimmikumarisinha@gmail.com",
    to: req.body.email,
    subject: "Email Verification for Nuakri App",
    html: `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                h2 {
                    color: #333;
                }
                p {
                    font-size: 16px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Email Verification for Nuakri App</h2>
                <p>Hello,</p>
                <p>Your OTP for email verification is: <strong>${otp}</strong></p>
                <p>Please use this OTP to complete your to reset password. Do not share this OTP with anyone.</p>
            </div>
        </body>
        </html>
    `
};
      transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            return res.status(500).json({message:'failed to send otp'})
        }
        console.log('email sent:'+info.response);
        return res.status(200).json({message:'OTP sent sucessfully'})
      })
})




module.exports = router;





