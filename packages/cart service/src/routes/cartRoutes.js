import { Router } from "express";

const router = Router();

router.get("/ping", (req, res) => {
  res.send("cart service");
});

export default router;
