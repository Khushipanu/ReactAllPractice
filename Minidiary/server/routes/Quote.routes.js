import express from "express"
import { quotes } from "../controllers/Quote.controller.js";

const router=express.Router();


router.get('/quotes',quotes)

export default router;