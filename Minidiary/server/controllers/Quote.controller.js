import express from "express"
import Quote from "../models/Quote.model.js"

export const quotes=async(req,res)=>{
    const quotes=await Quote.find();
    return res.json({quotes})
}