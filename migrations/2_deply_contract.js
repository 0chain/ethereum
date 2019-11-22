var dstr = artifacts.require("./dStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(dstr);
};