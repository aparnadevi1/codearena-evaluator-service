import Docker from "dockerode";
async function createContainer(imageName: string, cmdExecutable: string[]) {
  const docker = new Docker();
  const container = await docker.createContainer({
    Image: imageName,
    Cmd: cmdExecutable,
    AttachStdin: true, //to enable input strams
    AttachStdout: true, //to enable output streams
    AttachStderr: true, // to enable erro streams
    Tty: false,
    OpenStdin: true, //keep the input stream open even no interaction is there
  });
  return container;
}
export default createContainer;
