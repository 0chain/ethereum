pragma solidity ^0.5.0;

contract dStorage {
  address public blobber;
  address public OracleAddress;

  constructor (address _OracleAddress) public {
    OracleAddress = _OracleAddress;
  }

  event fileUpload (string authTicket);

  function uploadFile(string memory _authTicket)
  public
  {
    require(msg.sender == blobber);
    emit fileUpload (_authTicket);
  }
}