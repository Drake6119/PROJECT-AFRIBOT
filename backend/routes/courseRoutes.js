import express from "express";

import {
  createCourse,
  getCourses,
} from "../controllers/courseController.js";

import {protect, adminOnly,} from "../middleware/authMiddleware.js"

const router = express.Router();

router.route("/")
  .get(getCourses)
  .post(
    protect,
    adminOnly,
    createCourse
  );

export default router;