import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import User from "../models/User.model.js";
import sendMail from "../middlewares/sendMail.js";
import bcrypt from "bcrypt"
dotenv.config();

export const register=async(req,res)=>{
    try{
        const {name,email,password,role}=req.body;
        if(!name || !email || !password || !role){
            return res.status(400).json({message:"name, email,role  and password are required"});
        }
        let user=await User.findOne({email});
        if(user)  return res.status(400).json({message:"User already exists"});
        const hashedPass=await bcrypt.hash(password,10);
        user={
            name:name,
            email:email,
            password:hashedPass,
            role:role
        }
        const otp=Math.floor(Math.random()*1000000);
        const registerToken=jwt.sign({
            user,
            otp
        },process.env.REGISTER_SECRET_KEY,{
            expiresIn:"15d"
        })

        //data mai user and otp hai 
        const data={user,otp}

        try{
            await sendMail(email,"LMS",data)
        }catch(err){
            console.log("sendEmail error",err)
            return res.status(500).json({message:"failed to send email"})
        }
        res.status(200).json({message:"OTP sent to your email",registerToken})
    }catch(err){
        console.log(err);

    }
}

export const verifyUser=async(req,res)=>{
    const {otp,registerToken}=req.body;
    const verify=jwt.verify(registerToken,process.env.REGISTER_SECRET_KEY)
    if(!verify) return res.status(400).json({message:"Otp expired"})
    if(verify.otp !=otp) return res.status(400).json({message:"invalid otp"})
    console.log(verify.user);
    console.log(verify.otp);
    //verification done

    await User.create({
        name:verify.user.name,
        email:verify.user.email,
        password:verify.user.password,
        role:verify.user.role,
    })
    res.json({
        message:"User registered"
    })
    }
    
    export const login=async(req,res)=>{
        const {email,password}=req.body;
        const user=await User.findOne({email})
        if(!user)  res.status(400).json({message:"user not found"});
        const hash=user.password;
        const isPassword=await bcrypt.compare(password,hash)
        if(!isPassword)  return res.status(400).json({message:"wrong password"})
        const token=jwt.sign({
           _id:user._id,
           role:user.role
    },process.env.JWT_SECRET_KEY,{expiresIn:"20d"})
    return res.json({message:`Welcome back ${user.name}`,user,token})
    }