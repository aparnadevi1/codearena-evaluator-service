import { Job } from "bullmq";

import { IJob } from "../types/bullMqJobDefinition";

class SampleJob implements IJob {
  name: string;
  payload: Record<string, unknown>;
  constructor(payload: Record<string, unknown>) {
    this.payload = payload;
    this.name = this.constructor.name;
  }
  handle = (job: Job) => {
    console.log("Handler of job called");
  };
  failed = (job?: Job): void => {
    console.log("Job failed", job.id);
  };
}
