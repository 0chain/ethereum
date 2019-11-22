pragma solidity ^0.5.0;

contract dStorage {
  address public blobber;

  constructor () public {
    blobber = msg.sender;
  }

  event fileUpload (string authTicket, string documentHash, string lookupHash);

  function uploadFile(string memory _authTicket, string memory _documentHash, string memory _lookupHash)
  public
  {
    emit fileUpload (_authTicket, _documentHash, _lookupHash);
  }
}