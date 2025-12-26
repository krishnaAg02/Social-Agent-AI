import express from "express";
import features from "../data/features.json" with { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.json(features);
});

export default router;
