import express from "express";
const router = express.Router();
import { login, logout } from "../controller/authController.js";

router.post("/login", login);
router.post("/logout", logout);

export default router;
