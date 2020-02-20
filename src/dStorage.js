var web3 = require("./web3");
var KEYS = require("../config");

let abi = [
    {
      "constant": true,
      "inputs": [],
      "name": "client",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "authTicket",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "documentHash",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "lookupHash",
          "type": "string"
        }
      ],
      "name": "fileUpload",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTicket",
          "type": "string"
        },
        {
          "name": "_documentHash",
          "type": "string"
        },
        {
          "name": "_lookupHash",
          "type": "string"
        }
      ],
      "name": "uploadFile",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
let address = KEYS.CONTRACT_ADRESS; // deployed eth contract address from etherscan 

module.exports = new web3.eth.Contract(abi, address);