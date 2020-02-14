import express, { Application } from "express";
//import mongoose from "mongoose";

const app: Application = express();

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Runing !!!! on port:${PORT}`));
