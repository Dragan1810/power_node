import path from 'path';
import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.json({ hello: "world" });
});

router.get("/chat", (req, res) => {
  //console.log(`${__dirname}/views/index.html`);
  res.sendFile(`./views/index.html`, {root: __dirname});
});

export { router as Routes };
