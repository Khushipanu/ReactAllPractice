import express from "express"
import { isAdmin, isAuth } from "../middlewares/isAuth.js";
import { createQuote } from "../controllers/Admin.controller.js";
const router=express.Router();
router.post('/quote/new',isAuth,isAdmin,createQuote)


export default router;
