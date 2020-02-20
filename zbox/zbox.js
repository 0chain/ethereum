var path = require('path');
var scriptName = path.basename(__filename);
var fs = require('fs');
var config = require('./zbox_config.json')


class Zbox {

// Upload files to 0chain blobbers
uploadFile(path, fileName) {
  return new Promise((resolve, reject) => {
    const uploadCommand = `${config["0chain"].zboxcli} upload --commit --localpath ${path} --remotepath /${fileName} --allocation ${config["0chain"].allocationId}`;
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
batchUploadFile(path) {
  return new Promise((resolve, reject) => {
  const uploadCommand = `${config["0chain"].zboxcli} sync --allocation ${config["0chain"].allocationId} --localpath ${path} --commit --verbose --uploadonly`;
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

module.exports = Zbox;