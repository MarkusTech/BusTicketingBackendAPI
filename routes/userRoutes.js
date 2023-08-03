import express from "express";
const router = express.Router();
import {
  registerUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controller/userController.js";

router.post("/user", registerUser);
router.get("/user", getUsers);
router.get("/user/:id", getUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;
