import express from "express"
import Quote from "../models/Quote.model.js";
export const createQuote=async(req,res)=>{
  try{
      const {title,book,quoteBy}=req.body;
    await Quote.create({
        title,
        book,
        quoteBy:req.user._id,

    })
    res.status(201).json({message:"Quote created"})
  }catch(err){
    console.log(err)
    res.status(500).json({ message: "Something went wrong" });

  }

}
export const deleteQuote=async(req,res)=>{
    try{
        const {id}=req.params;
    const quote=await Quote.findById(id);
    if(!quote) return res.json({message:"no quote found"})
    await Quote.findByIdAndDelete(id)
   res.status(200).json({message:"Quote deleted successfully"})


    } catch(err){
        console.log(err)
        res.status(500).json({ message: "Something went wrong" });




    }

}