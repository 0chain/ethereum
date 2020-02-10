import web3 from "./web3";
import KEYS from "./config";

let abi = [{"constant":false,"inputs":[{"internalType":"string","name":"_authTicket","type":"string"},{"internalType":"string","name":"_documentHash","type":"string"},{"internalType":"string","name":"_lookupHash","type":"string"}],"name":"uploadFile","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"blobber","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"authTicket","type":"string"},{"indexed":false,"internalType":"string","name":"documentHash","type":"string"},{"indexed":false,"internalType":"string","name":"lookupHash","type":"string"}],"name":"fileUpload","type":"event"}];
let address = KEYS.CONTRACT_ADRESS; // deployed eth contract address from etherscan 

export default new web3.eth.Contract(abi, address);