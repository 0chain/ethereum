# 0chain Truffle Box
Truffle integration for building decentralized applications with 0chain's dStorage protocol. 

## Prerequisites
1. Setup [gosdk](https://github.com/0chain/gosdk/)
2. Setup [zboxcli](https://github.com/0chain/zboxcli) and [zwallet](https://github.com/0chain/zwalletcli)
3. Install [golang](https://golang.org/doc/install)
4. Install [truffle](https://www.npmjs.com/package/truffle) globally.
5. Install Make & Git.
6. Install [Metamask](https://metamask.io/) for your browser.

### Running the App
- Clone this repository and run  - `npm install`
- Before running, add your private key and ethereum wallet address from metamask to `config.js` file. 
- Deploy contract on Remix IDE and add the deployed contract address to `config.js` file.
- Run the commit function in zboxcli (--commit flag) which commits to the 0chain blockchain and generates the metadata. 
- Store the resultant metadata in an `output.txt` file and store the file under the `out` folder in this repository.
- Run `npm start` or Upload file transaction metadata (found in output.txt) on [Remix IDE](http://remix.ethereum.org/).

#### Questions
For any questions regarding this repository open an issue [here](https://github.com/0chain/truffle/issues).

#### Tests
Smart contract tested with [MythX](https://mythx.io/).

#### Author
[Jenil K. Thakker](http://github.com/jenil04)

