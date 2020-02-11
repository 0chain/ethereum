var express = require('express');
var router = express.Router();
var path = require('path');
var scriptName = path.basename(__filename);
var log4js = require('log4js');
var logger = log4js.getLogger(scriptName);
var fs = require('fs');
var http = require('http');
var jsondata = require('./data.json');
var http = require('http');
var https = require('https');

class Zbox {
  // Upload files to 0chain blobbers
uploadFile(path, serialNumber, fileName) {
  return new Promise((resolve, reject) => {
    const uploadCommand = `${global.globalconfig["0chain"].zboxcli} upload --commit --localpath ${path} --remotepath /${serialNumber}/${fileName} --allocation ${global.globalconfig["0chain"].allocationId}`;
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
