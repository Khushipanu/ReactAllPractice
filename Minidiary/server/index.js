import express from "express"
const app=express();
import cors from "cors";
import dotenv from "dotenv"
import { db } from "./database/db.js";

dotenv.config()

app.use(cors({
  origin: "*",
  credentials: true,
}));

app.get("/",(req,res)=>{
    res.send("im best")
})
const PORT=process.env.PORT
db()

//middlewares
app.use(express.json())

import UserRoutes from "./routes/User.routes.js"
import AdminRoutes from "./routes/Admin.routes.js"
import QuoteRoutes from "./routes/Quote.routes.js"


app.use("/api",UserRoutes);
app.use("/api",AdminRoutes)
app.use("/api",QuoteRoutes)

app.use((req,res)=>{
    res.status(404).json({message:"Req not found"})
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})
