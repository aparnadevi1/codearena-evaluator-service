import Redis from "ioredis";

import ServerConfig from "./serverConfig.js";

export const redisConnection = new Redis({
  port: ServerConfig.REDIS_PORT,
  host: ServerConfig.REDIS_HOST,
  maxRetriesPerRequest: null,
});
