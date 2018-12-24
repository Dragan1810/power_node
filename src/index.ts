import express, { Application } from "express";
import { Routes } from "./routes";

const app: Application = express();

app.use("/", Routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Runing !!!! on port:${PORT}`));
