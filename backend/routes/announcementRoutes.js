import express from "express";

import {
  createAnnouncement,
  getAnnouncements,
} from "../controllers/announcementController.js";

const router = express.Router();

router
  .route("/")
  .get(getAnnouncements)
  .post(createAnnouncement);

export default router;