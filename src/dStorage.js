import web3 from './web3';

// deployed contract address
const address = '0x02bae0e2da424cdadbb309e1256ec9647f0befe4';

const abi = [
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
		"name": "uploadMetadata",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "authTicket",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "documentHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getAuthTicket",
		"outputs": [
			{
				"name": "_authTicket",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDocumentHash",
		"outputs": [
			{
				"name": "_documentHash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getLookupHash",
		"outputs": [
			{
				"name": "_lookupHash",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "lookupHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
  export default new web3.eth.Contract(abi, address);
