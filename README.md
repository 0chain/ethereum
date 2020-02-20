# 0chain Truffle Box
Truffle integration for building decentralized applications with 0chain's dStorage protocol. 

## Running the Application with Remix IDE
- Before deploying, install [metamask](https://metamask.io/) for your browser.
- The smart contract - `dStorage.sol` can be found [here](https://github.com/0chain/ethereum/tree/master/truffle/contracts).
- To compile and deploy the contract, copy and paste the code on the [remix IDE](http://remix.ethereum.org/).
- Video demonstration for deploying the contract and running the app with remix can be found [here](https://youtu.be/weDEbgLA7_w).

## Running the Application using CLI

### Prerequisites
1. Setup [zboxcli](https://github.com/0chain/zboxcli).
2. Install [golang](https://golang.org/doc/install)
3. Install [truffle](https://www.npmjs.com/package/truffle) globally.

### Run the App

- Clone this repository and run  - `npm install`
- Add your private key and ethereum wallet address from metamask to `config.js` file. 
- Add the deployed contract address to `config.js` file (can be found on etherscan).
- Add your zbox configurations in the `zbox_config` file [here](https://github.com/0chain/ethereum/blob/master/zbox/zbox_config.json).
- Run `npm start` to interact with the web application.

### Questions
For any questions regarding this repository open an issue [here](https://github.com/0chain/truffle/issues).

### Tests
Smart contract tested with [MythX](https://mythx.io/).

### Author
[Jenil K. Thakker](http://github.com/jenil04)

