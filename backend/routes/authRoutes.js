import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  registerUser,
  loginUser,
  getUserProfile,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Only profile should require login
router.get("/profile", protect, getUserProfile);

export default router;