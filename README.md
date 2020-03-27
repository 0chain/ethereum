# 0Chain Truffle Box

<p align="center">
  <img src="https://github.com/0chain/ethereum/blob/master/src/images/0chain-readme.png">
</p>

## Overview
This goal of this integration is to create a decentralized app (dapp) that stores 0Chain's file metadata as a proof on Ethereum. 

## Features

- Upload file to the 0Chain blockchain that uses the dStorage protocol. 
- Generate metadata of the uploaded file and commit proof to ethereum.
- Get transaction details for your ethereum transaction. 

### Prerequisites
1. Setup [zboxcli](https://github.com/0chain/zboxcli).
2. Install [truffle](https://www.npmjs.com/package/truffle) globally - `npm install -g truffle`.
3. Install [metamask](https://www.metamask.io) for your browser. (Make sure you have enough funds.)

### Run the App
1. Clone this repository and run  - `npm install` and run `npm start` to launch the web application.
2. Add the following zbox configurations in the `zbox_config` file [here](https://github.com/0chain/ethereum/blob/master/src/zbox/zbox_config.json):
  - zboxcli: The path to your `zboxcli` repository,
  - zcn_home : The path to `.zcn` directory stored in your root folder,
  - upload_path : The path to where you want to upload your file,
  - download_path : The path to your downloads folder,
  - allocationId: The allocation ID generated after your setup your `zboxcli`. (To get an allocation ID run - `./zbox newallocation`),
  - localpath: Absolute path to the file on your local system,
  - remotepath: Remote path where you want to store. It should start with "/",
  - walletInfo: The generated wallet information after registering your wallet with zboxcli.
3. On the web application, upload a file to the Ochain blockchain by pressing `Upload`, to generate metadata for your uploaded file.
4. After generating your file metadata, press `commit` to add your metadata to ethereum. .
6. You can get your ethereum transaction details on the table below. 

### Questions
For any questions regarding this repository open an issue [here](https://github.com/0chain/ethereum/issues).

### Tests
Smart contract tested with [MythX](https://mythx.io/).

### Author
[Jenil K. Thakker](http://github.com/jenil04)

