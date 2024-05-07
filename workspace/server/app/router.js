import express from "express";
import { register } from "./UserController.js";

const router = express.Router();
console.log("접근");
router.post("/register", register);

export default router;
