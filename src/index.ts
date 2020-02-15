import express, { Application } from "express";
const app: Application = express();
import { router } from "./routes";

app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server Runing !!!! on port:${PORT}`));
