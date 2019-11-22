package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"os"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/0chain/gosdk/core/zcncrypto"
	"github.com/0chain/gosdk/zboxcore/sdk"
	"github.com/0chain/gosdk/zcncore"
)

const (
	ZCNStatusSuccess int = 0
	ZCNStatusError   int = 1
)

type StatusBar struct {
	wg *sync.WaitGroup
}

func (s *StatusBar) Started(allocationId, filePath string, op int, totalBytes int) {

}
func (s *StatusBar) InProgress(allocationId, filePath string, op int, completedBytes int) {

}

func (s *StatusBar) Completed(allocationId, filePath string, filename string, mimetype string, size int, op int) {
	defer s.wg.Done()
	fmt.Println("Status completed callback. Type = " + mimetype + ". Name = " + filename)
	os.Remove(filename)
}

func (s *StatusBar) Error(allocationID string, filePath string, op int, err error) {
	defer s.wg.Done()
	fmt.Println("Error in file upload." + err.Error())
}

type ZCNStatus struct {
	walletString string
	wg           *sync.WaitGroup
	success      bool
	errMsg       string
}

func (zcn *ZCNStatus) OnWalletCreateComplete(status int, wallet string, err string) {
	fmt.Println("Callback from the miner registration. %v %v %v", status, wallet, err)
	defer zcn.wg.Done()
	if status == ZCNStatusError {
		zcn.success = false
		zcn.errMsg = err
		zcn.walletString = ""
		return
	}
	zcn.success = true
	zcn.errMsg = ""
	zcn.walletString = wallet
	return
}

var wallet *zcncrypto.Wallet
var zcnConfig ZChainConfig

type ZChainConfig struct {
	Miners          []string `json:"miners"`
	Sharders        []string `json:"sharders"`
	SignatureScheme string   `json:"signature_scheme"`
	ChainID         string   `json:"chain_id"`
}

const ChainConfig = `{
	"miners": [
		"http://129.146.42.83:7071",
   		"http://129.146.42.83:7072",
    	"http://129.146.42.83:7073"
	],
	"sharders": [
		"http://129.146.42.83:7171"
	],
	"signature_scheme": "ed25519",
	"chain_id" : "0afc093ffb509f059c55478bc1a60351cef7b4e9c008a53a6cc8241ca8617dfe"
}`

const clientConfig = `{"client_id":"f7902f78600aa8062d57e58c6bae06d04bd8ba991cf7a12e6c664b462c4b3b71","client_key":"34f001bbeaf2ec3445944a08dfefc4f9dba498c1491cba92b744c1c634f7a25c","keys":[{"public_key":"34f001bbeaf2ec3445944a08dfefc4f9dba498c1491cba92b744c1c634f7a25c","private_key":"c71b32167a44dbacdb4e10483e61e0e239ad661d35eb7009c807427dc48935d634f001bbeaf2ec3445944a08dfefc4f9dba498c1491cba92b744c1c634f7a25c"}],"mnemonics":"switch guitar below salt begin rhythm lift cloud milk visual motion usual solve recycle script report effort want sunset bag father fog album jewel","version":"1.0","date_created":"2019-05-09 23:59:28.443902 -0700 PDT m=+0.017712356"}`

// ===================================================================================
// Main
// ===================================================================================
func main() {
	wallet = &zcncrypto.Wallet{}

	err := json.Unmarshal([]byte(clientConfig), wallet)
	if err != nil {
		fmt.Printf("Error starting Parts Trace chaincode: %s", err)
		return
	}

	err = json.Unmarshal([]byte(ChainConfig), &zcnConfig)
	if err != nil {
		fmt.Printf("Error starting Parts Trace chaincode: %s", err)
		return
	}

	err = zcncore.InitZCNSDK(zcnConfig.Miners, zcnConfig.Sharders, zcnConfig.SignatureScheme)
	if err != nil {
		fmt.Printf("Error init of the zcn sdk %v", err)
		return
	}
	fmt.Println("Registering to the miners")
	wg := &sync.WaitGroup{}
	statusBar := &ZCNStatus{wg: wg}
	wg.Add(1)
	err = zcncore.RegisterToMiners(wallet, statusBar)
	if err != nil {
		fmt.Printf("Error trying to register wallet to miners")
		return
	}
	fmt.Println("Request to register sent to the miners. waiting for response")
	wg.Wait()
	fmt.Println("registration complete")
	if !statusBar.success {
		fmt.Printf("Wallet registration failed")
		return
	}
	err = sdk.InitStorageSDK(clientConfig, zcnConfig.Miners, zcnConfig.Sharders, zcnConfig.ChainID, zcnConfig.SignatureScheme)
	if err != nil {
		fmt.Println("Error in sdk init", err)
		return
	}

	err = shim.Start(new(AutoTraceChaincode))
	if err != nil {
		fmt.Printf("Error starting Parts Trace chaincode: %s", err)
		return
	}

}

// ============================================================
// Get = {authTicket, documentHash, lookupHash}
// ============================================================
func (t *AutoTraceChaincode) init(stub shim.ChaincodeStubInterface, args []string) pb.Response {
	var err error

	authticket := ""
	documentHash := ""
	if len(args[7]) > 0 {
		authticket = args[7]
		allocationObj, err := sdk.GetAllocationFromAuthTicket(authticket)

		at := sdk.InitAuthTicket(authticket)
		filename, err := at.GetFileName()
		if err != nil {
			fmt.Println("Error getting the filename from authticket", err)
			return shim.Error("Error getting the filename from authticket")
		}
		lookuphash, err := at.GetLookupHash()
		if err != nil {
			fmt.Println("Error getting the lookuphash from authticket", err)
			return shim.Error("Error getting the lookuphash from authticket")
		}

		ft, err := allocationObj.GetFileMetaFromAuthTicket(authticket, lookuphash)
		if err != nil {
			fmt.Println("Error in getting file meta data from blobbers", err)
			return shim.Error("Error in getting file meta data from blobbers." + err.Error())
		}

		wg := &sync.WaitGroup{}
		statusBar := &StatusBar{wg: wg}
		wg.Add(1)
		errE := allocationObj.DownloadFromAuthTicket(".", authticket, lookuphash, filename, statusBar)
		if errE == nil {
			wg.Wait()
		} else {
			fmt.Println(errE.Error())
			return shim.Error("Error getting the file from authticket." + errE.Error())
		}
		documentHash = ft.Hash
	}
}