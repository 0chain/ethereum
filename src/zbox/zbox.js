var fs = require('fs');
const { exec } = require('child_process');
var config = require('./zbox_config.json')


class Zbox {

// Upload files to 0chain blobbers
uploadFile() {
  return new Promise((resolve, reject) => {
    const uploadCommand = `${config["0chain"].zboxcli} upload --commit --localpath ${config["0chain"].localpath} --remotepath /${config["0chain"].fileName} --allocation ${config["0chain"].allocationId}`;
    console.log("Uploading file", uploadCommand);
    exec(uploadCommand, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }
      if (stderr) {
        console.error(stderr);
        reject(stderr);
        return;
      }
      resolve(stdout);
    });
  });
}

// Upload files to 0chain blobbers
batchUploadFile() {
  return new Promise((resolve, reject) => {
  const uploadCommand = `${config["0chain"].zboxcli} sync --allocation ${config["0chain"].allocationId} --localpath ${config["0chain"].localpath} --commit --verbose --uploadonly`;
  console.log("Uploading folder (batch files)", uploadCommand);

  exec(uploadCommand, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      reject(err);
      return;
    }
    if (stderr) {
      console.error(stderr);
      reject(stderr);
      return;
    }
      resolve(stdout);
    });
  });
}

deleteUploadedFile(path) {
  try {
    fs.unlinkSync(path)
    //file removed
  } catch (err) {
    console.error(err)
  }
  return true
  }
}

export default Zbox;