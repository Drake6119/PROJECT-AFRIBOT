// routes/testRoutes.js

import express from "express";

const router = express.Router();

router.get("/message", (req, res) => {
  res.json({
    message: "Backend connected successfully "
  });
});

export default router;
