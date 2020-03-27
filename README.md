# 0Chain Truffle Box
Ethereum integration with 0Chain's dStorage protocol for storing metadata on ethereum. 

## Features

- Upload file to the 0Chain blockchain that uses the dStorage protocol. 
- Generate metadata of the uploaded file and commit proof to ethereum.
- Get transaction details for your ethereum transaction. 

![](https://github.com/0chain/ethereum/blob/master/src/images/0chain-readme.png)

### Prerequisites
1. Setup [zboxcli](https://github.com/0chain/zboxcli).
2. Install [truffle](https://www.npmjs.com/package/truffle) globally - `npm install -g truffle`.
3. Install [metamask](https://www.metamask.io) for your browser. (Make sure you have enough funds.)

### Run the App
1. Clone this repository and run  - `npm install` and run `npm start` to launch the web application.
2. Add your zbox configurations in the `zbox_config` file [here](https://github.com/0chain/ethereum/blob/master/src/zbox/zbox_config.json).
3. On the web application, upload a file to the Ochain blockchain by pressing `Upload`, to generate metadata for your uploaded file.
4. After generating your file metadata, press `commit` to add your metadata to ethereum. .
6. You can get your ethereum transaction details on the table below. 

### Questions
For any questions regarding this repository open an issue [here](https://github.com/0chain/ethereum/issues).

### Tests
Smart contract tested with [MythX](https://mythx.io/).

### Author
[Jenil K. Thakker](http://github.com/jenil04)

