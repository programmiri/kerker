import { normalizeAfterDecryption, prepareForEncryption } from '../hex';

const maxLength = 500;

// IMPORTANT:
// Changing path OR key will change en-/decryption results!!!
const path = "m/10016'/0";
const key = 'Unlock KERKER?';

const confirmEncryption = false;
const confirmDecryption = false;

const isValid = (content = '') => content.length <= maxLength;

const encrypt = (content, options = {}) => {
  const value = prepareForEncryption(content);

  const trezorCall = (resolve, reject) => {
    buildTrezorCall({ content: value, encrypt: true }, (result) => {
      if (result.success) {
        resolve({ content: result.value });
      } else {
        reject({ error: result.error });
      }
    });
  };

  return new Promise(trezorCall);
};

const decrypt = (content, options = {}) => {
  const trezorCall = (resolve, reject) => {
    buildTrezorCall({ content, encrypt: false }, (result) => {
      if (result.success) {
        resolve({ content: normalizeAfterDecryption(result.value) });
      } else {
        reject({ error: result.error });
      }
    });
  };

  return new Promise(trezorCall);
};

const buildTrezorCall = ({ content, encrypt }, callback) => {
  return window.TrezorConnect.cipherKeyValue(
    path, key, content, encrypt, confirmEncryption, confirmDecryption, callback
  );
};

export { isValid, encrypt, decrypt };
