import express, { Application } from "express";
import mongoose from 'mongoose'
import { Routes } from "./routes";

const app: Application = express();

mongoose.connect("mongodb://mongo:27017/power_node");

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

app.use("/", Routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Runing !!!! on port:${PORT}`));
