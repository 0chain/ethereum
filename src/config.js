const KEYS = {
    PRIVATE_KEY: '',
    PUBLIC_KEY: '',
    CONTRACT_ADDRESS: '0x02bae0e2da424cdadbb309e1256ec9647f0befe4'
}

// Encryption and re-encryption keys are optional when files are uploaded with --encrypt and shared 
// to a specific user, with their encryption key.

const ZBOX_METADATA = {
    fileName: '',
    authTicket: '',
    documentHash: '', 
    lookupHash: '',
    encyptionKey: '',
    reEncryptionKey: '' 
}

module.exports = { KEYS, ZBOX_METADATA };
