import { Buffer } from "node:buffer";

import Docker from "dockerode";

import { TestCases } from "../types/testCases";
import { PYTHON_IMAGE } from "../utils/constants.js";
import createContainer from "./containerFactory.js";
import decodeDockerStream from "./dockerHelper.js";

async function runPython(code: string, inputTestCase: string) {
  const rawLogBuffer: Buffer[] = [];
  console.log("Initilising a new python docker container");
  // const pythonDockerContainer = await createContainer(PYTHON_IMAGE, [
  //   "python3",
  //   "-c",
  //   code,
  //   "stty -echo",
  // ]);
  const runCommand = `echo '${code.replace(/'/g, `'\\"`)}' > test.py && echo '${inputTestCase.replace(/'/g, `\\"`)}' | python3 test.py`;
  const pythonDockerContainer = await createContainer(PYTHON_IMAGE, [
    "/bin/sh",
    "-c",
    runCommand,
  ]);
  //starting / booting the python docker container
  await pythonDockerContainer.start();

  console.log("Started the docker container");

  const loggerStream = await pythonDockerContainer.logs({
    stdout: true,
    stderr: true,
    timestamps: false,
    follow: true, //whether the logs are streamed or returned as a string
  });

  loggerStream.on("data", (chunk) => {
    rawLogBuffer.push(chunk);
  });
  loggerStream.on("end", () => {
    console.log(rawLogBuffer);
    const completeBuffer = Buffer.concat(rawLogBuffer);
    const decodedStream = decodeDockerStream(completeBuffer);
    console.log(`Decoded Stream`);
    console.log(decodedStream);
    console.log(decodedStream.stdout);
  });
  return pythonDockerContainer;
}
export default runPython;
