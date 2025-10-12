import express, { Express } from "express";

import serverConfig from "./config/serverConfig.js";
import apiRouter from "./routes/index.js";
const app: Express = express(); //if we dont mention also express() function returns the types

app.use("/api", apiRouter);
app.listen(serverConfig.PORT, () => {
  console.log(`Server started at PORT :${serverConfig.PORT}`);
  console.log("wow");
});
