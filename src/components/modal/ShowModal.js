import React, { useState, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

import config from '../../0chain/cluster'
import jsClientSdk from '0chain';
import zbox_config from '../../config/config.json'

// Initialize 0Chain jsClientSDK
jsClientSdk.init(config, window.bls);

class UploadFileToChain extends Component {
  state = {
    file: null,
    allocationId: zbox_config["0chain"].allocation,
    remotePath: zbox_config["0chain"].remote_path,
    walletInfo: zbox_config["0chain"].client_json,
    errorMessage: ''
  }

  onFileUpload = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  uploadMetadataToZbox = async () => {
    try {
        console.log(this.state.file)
        console.log(this.state.allocationId)
        console.log(this.state.remotePath)
        console.log(this.state.walletInfo)
        await jsClientSdk.uploadObject(this.state.file, this.state.allocationId, 
          this.state.remotePath, this.state.walletInfo)
    } 
    catch (error) {
      console.log(error)
    }
  };

  render() {
    return (
      <div>
        <Input
        type="file"
        className="form-control"
        name="file"
        onChange={this.onFileUpload}
        />
        <br/>
        <Button onClick={this.uploadMetadataToZbox}>Upload</Button>
      </div>
    )
  }
}


const ShowModal = (props) => {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
      <Button onClick={toggle}>Upload</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Choose File to Upload</ModalHeader>
        <ModalBody>
          <UploadFileToChain/> 
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}


export default ShowModal;