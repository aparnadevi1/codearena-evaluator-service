import { Queue } from "bullmq";

import { redisConnection } from "../config/redisConfig.js";
export const sampleQueue = new Queue("SampleQueue", {
  connection: redisConnection,
});
