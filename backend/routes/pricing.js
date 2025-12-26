import express from "express";
import pricing from "../data/pricing.json" with { type: "json" };

const router = express.Router();

router.get("/", (req, res) => {
  res.json(pricing);
});

export default router;
