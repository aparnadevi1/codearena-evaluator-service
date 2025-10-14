import express, { Express } from "express";

import serverConfig from "./config/serverConfig.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import apiRouter from "./routes/index.js";
import SampleWorker from "./workers/sampleWorker.js";
const app: Express = express(); //if we dont mention also express() function returns the types

app.use("/api", apiRouter);
app.listen(serverConfig.PORT, () => {
  console.log(`Server started at PORT :${serverConfig.PORT}`);
  SampleWorker("SampleQueue");
  sampleQueueProducer(
    "SampleJob",
    {
      name: "Aparna",
      company: "Google",
      position: "SDE",
      location: "BLR",
    },
    2,
  );
  sampleQueueProducer(
    "SampleJob",
    {
      name: "Arun",
      company: "Microsoft",
      position: "SDE2",
      location: "BLR",
    },
    1,
  );
});
