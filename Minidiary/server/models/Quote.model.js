import mongoose from "mongoose"
const QuoteSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    book:{
        type:String,
        required:true
    },
    quoteBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

})
const Quote=mongoose.model("Quote",QuoteSchema)
export default Quote;