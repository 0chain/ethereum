import web3 from "./web3";
import dstr from "./dStorage";
var fs = require('fs');
import output from "./out/output.txt";
import KEYS from "./config";

try {
    var data = fs.readFileSync('output.txt', 'utf8');
    console.log(data);    
} catch(e) {
    console.log('Error:', e.stack);
}

const ethTx = require('ethereumjs-tx');

const txParams = {
  nonce: '0x6', // Replace by nonce for your account on geth node
  gasPrice: '0x09184e72a000', 
  gasLimit: '0x30000',
  to: '', 
  value: data
};

// Transaction is created
const tx = new ethTx(txParams);
const privKey = Buffer.from('', 'hex');

// Transaction is signed
tx.sign(KEYS.PRIVATE_KEY);
const serializedTx = tx.serialize();
const rawTx = '0x' + serializedTx.toString('hex');
console.log(rawTx)

eth.sendRawTransaction(rawTx);
