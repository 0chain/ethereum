# 0Chain Truffle Box

<p align="center">
  <img src="https://github.com/0chain/ethereum/blob/master/src/images/0chain-readme.png">
</p>

## Overview
This goal of this integration is to create a decentralized app (dapp) that stores 0Chain's file metadata as a proof on Ethereum. 

If you're new to Ethereum, learn more about it [here](https://medium.com/@mattcondon/getting-up-to-speed-on-ethereum-63ed28821bbe).

## Features

- Upload file to the 0Chain blockchain that uses the dStorage protocol. 
- Generate metadata of the uploaded file and commit proof to ethereum.
- Get transaction details for your ethereum transaction. 

## Prerequisites
- Setup [zboxcli](https://github.com/0chain/zboxcli).
- Setup [0Chain Proxy Server](https://github.com/0chain/0Chain_proxy_server).
- Install [truffle](https://www.npmjs.com/package/truffle) globally - `npm install -g truffle`.
- Install [metamask](https://www.metamask.io) for your browser. (Make sure you have enough funds.)
  - To get some funds for your metamask wallet, make a request to a [faucet](https://faucet.metamask.io).

## Setting up zboxcli 
- Make sure you have Go V1.12 or higher installed on your computer. 
- Clone the repository - `git clone https://github.com/0chain/zboxcli.git`
- In the zboxcli directory run - `make install`
- Run the following commands after, to set up the network config:
  -  `mkdir ~/.zcn && cp network/one.yaml ~/.zcn/config.yaml`
- Lastly, run `./zbox` to check if the setup is successful.

## Run the App
- Clone this repository and run  - `npm install` and run `npm start` to launch the web application.
- Add the following zbox configurations in the `config.json` file [here](https://github.com/0chain/ethereum/tree/master/src/config):
  - zboxcli: The path to your `zboxcli` repository,
  - zcn_home : The path to `.zcn` directory stored in your root folder,
  - upload_path : The path to where you want to upload your file,
  - download_path : The path to your downloads folder,
  - allocationId: The allocation ID generated after your setup your `zboxcli`. (To get an allocation ID run - `./zbox newallocation`),
  - localpath: Absolute path to the file on your local system,
  - remotepath: Remote path where you want to store. It should start with "/",
  - walletInfo: The generated wallet information after registering your wallet with zboxcli.
- On the web application, upload a file to the Ochain blockchain by pressing `Upload`, to generate metadata for your uploaded file.
- After generating your file metadata, press `commit` to add your metadata to ethereum. .
- You can get your ethereum transaction details on the table below. 

## Questions
For any questions regarding this repository open an issue [here](https://github.com/0chain/ethereum/issues).

## Tests
Smart contract tested with [MythX](https://mythx.io/).

## Author
[Jenil Thakker](http://github.com/jenil04)

