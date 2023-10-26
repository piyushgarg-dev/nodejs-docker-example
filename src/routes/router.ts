import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Docker v3 🎉" }));

router.get("/health", (req, res) => {
  throw new Error("Internal Server Error");
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
