import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";

import connectDB from "./configs/db.js";

import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import announcementRoutes from "./routes/announcementRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";



const startServer = async () => {
  await connectDB();

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/test", testRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/courses", courseRoutes);
  app.use("/api/announcements", announcementRoutes);
  app.use("/api/enrollments", enrollmentRoutes);

  app.get("/", (req, res) => {
    res.send("API is running...");
  });

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();