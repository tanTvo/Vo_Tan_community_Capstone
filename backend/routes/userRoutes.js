import express from "express";
import { signupUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/signup", signupUser);



1


export default router; 