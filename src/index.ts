import express, { Express } from "express";

import serverConfig from "./config/serverConfig.js";
const app: Express = express(); //if we dont mention also express() function returns the types

app.listen(serverConfig.PORT, () => {
  console.log(`Server started at PORT :${serverConfig.PORT}`);
  console.log("wow");
});
