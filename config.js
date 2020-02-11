const KEYS = {
    PRIVATE_KEY: '',
    PUBLIC_KEY: '',
    CONTRACT_ADDRESS: '0xe8647ba6e24ed5fbab9ef70db19e2d39e8354e90'
}

// Encryption and reEncryption keys are optional when files are uploaded with --encrypt and shared 
// to a specific user, with their encryption key.
const ZBOX_METADATA = {
    fileName: '',
    documentHash: '', 
    lookupHash: '',
    encyptionKey: '',
    reEncryptionKey: '' 
}

module.exports = { KEYS, ZBOX_METADATA };
