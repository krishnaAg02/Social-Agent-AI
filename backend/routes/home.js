import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    headline: "Automate Your Social Growth",
    subtext:
      "Social.AI helps you generate content, schedule posts, and track engagement across platforms — all from one dashboard."
  });
});

export default router;
