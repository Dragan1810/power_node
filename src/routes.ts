import express, { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ hello: "world" });
});

export { router as Routes };
