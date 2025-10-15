import express, { Express } from "express";

import bullBoardAdapter from "./config/bullBoardConfig.js";
import serverConfig from "./config/serverConfig.js";
import sampleQueueProducer from "./producers/sampleQueueProducer.js";
import apiRouter from "./routes/index.js";
import SampleWorker from "./workers/sampleWorker.js";
const app: Express = express(); //if we dont mention also express() function returns the types
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRouter);
app.use("/ui", bullBoardAdapter.getRouter());
app.listen(serverConfig.PORT, () => {
  console.log(`Server started at PORT :${serverConfig.PORT}`);
  console.log(
    `BullBoard dashboard running on: http://localhost:${serverConfig.PORT}/ui`,
  );
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
