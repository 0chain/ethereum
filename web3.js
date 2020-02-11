var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/8d55dea8e70e4cdb90380af5fe492b9e'))
module.exports = web3;