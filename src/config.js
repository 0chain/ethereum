// Encryption and re-encryption keys are optional when files are uploaded with --encrypt and shared 
// to a specific user, with their encryption key.

const ZBOX_METADATA = {
    authTicket: '',
    documentHash: '', 
    lookupHash: '',
    encyptionKey: '',
    reEncryptionKey: '' 
}

module.exports = { ZBOX_METADATA };
