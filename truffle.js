var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC = 'task honey pony casual globe piano clip prison perfect castle vintage devote';


module.exports = {
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/8d55dea8e70e4cdb90380af5fe492b9e")
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
