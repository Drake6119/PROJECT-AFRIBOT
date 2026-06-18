import express from "express";

import {
  createEnrollment,
  getEnrollments,
} from "../controllers/enrollmentController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getEnrollments);

router.post(
  "/",
  protect,
  createEnrollment
);

export default router;