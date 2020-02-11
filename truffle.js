var HDWalletProvider = require("truffle-hdwallet-provider");
var KEYS = require("./config");


module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(KEYS.PRIVATE_KEY, "https://ropsten.infura.io/v3/8d55dea8e70e4cdb90380af5fe492b9e")
      },
      network_id: 3
    }     
  },
  compilers: {
    solc: {
      version: "0.5.0" 
    }
 }
};
