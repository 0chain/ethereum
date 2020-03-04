pragma solidity ^0.5.0;

contract dStorage {
  string public authTicket; 
  string public documentHash; 
  string public lookupHash; 

  
  function uploadMetadata(string memory _authTicket, string memory _documentHash, string memory _lookupHash) public {
   authTicket = _authTicket;
   documentHash = _documentHash;
   lookupHash = _lookupHash;
 }

 function getAuthTicket() public view returns (string memory _authTicket) {
     return authTicket;
 }
 
 function getDocumentHash() public view returns (string memory _documentHash) {
     return documentHash;
 }
 
 function getLookupHash() public view returns (string memory _lookupHash) {
     return lookupHash;
 }
 
}

