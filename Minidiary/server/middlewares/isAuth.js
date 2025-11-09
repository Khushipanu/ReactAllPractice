import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import User from "../models/User.model.js";
dotenv.config();

export const isAuth=async(req,res,next)=>{
    try{
        const token=req.headers.token;
        if(!token) return res.status(403).json({message:"pls login"});
        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY);
        console.log("decoded is :" ,decoded)
        req.user=await User.findById(decoded._id);
        console.log("user is : ",req.user);
        next();

    }catch(err){
            console.log(err)
            return res.status(500).json({message:"some error in auth"})

    }
}
export const isAdmin=async(req,res,next)=>{
    try{
        if(req.user.role!=="admin"){
            return res.status(403).json({message:"You are not admin"});
        }
        next();
    }catch(err){
        return res.status(500).json({message:"login first admin"})

    }
}