import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner} from 'reactstrap';

const ModalExample = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  return (
    <div>
      <Button onClick={toggle}>Click Me</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Uploading File to 0Chain  <Spinner/></ModalHeader>
        <ModalBody>
          Uploading file to 0Chain blockchain, please wait until the file metadata
          is fetched. The metadata can then be committed to Ethereum. 
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;