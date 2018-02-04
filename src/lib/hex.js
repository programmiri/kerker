// In JavaScript, one char is 16 bits wide,
// so we need 4 digits in the hex representation.
// 2**16 (16 binary digits) == 16**4 (4 hex digits)
const hexDigits = 4;

// Trezor needs us to provide a hex string with a
// length that is a multiple of 32.
const paddingLength = 32;

const splitDigitsRegex = new RegExp(`.{1,${hexDigits}}`, 'g');

const numToHex = num => {
  return num.toString(16).padStart(hexDigits, '0');
};

const charToHex = char => {
  return numToHex(char.charCodeAt(0));
};

const hexToNum = hexStr => {
  return parseInt(hexStr, 16);
};

const hexToChar = hexStr => {
  return String.fromCharCode(hexToNum(hexStr));
};

const fromString = str => {
  return str.split('').reduce((agg, char) => {
    return agg.concat(charToHex(char));
  }, '');
};

const toString = hexStr => {
  const segments = hexStr.match(splitDigitsRegex) || [];
  return segments.reduce((agg, hexStr) => {
    return agg.concat(hexToChar(hexStr));
  }, '');
};

// pad a hex string to paddingLength, using pkcs7
const pad = str => {
  const missingChars = paddingLength - str.length % paddingLength;
  const missingHex = missingChars / hexDigits;
  const padding = numToHex(missingHex).repeat(missingHex);

  return str.concat(padding);
};

// remove a pkcs7 padding from a hex string
const unpad = str => {
  const addedHex = str.substr(-hexDigits);
  const addedHexChars = addedHex * hexDigits;
  const addedNum = hexToNum(addedHex);
  const expectedPadding = addedHex.repeat(addedNum);

  if (!str.endsWith(expectedPadding)) {
    throw new Error('Padding is not as expected');
  }

  return str.substr(0, str.length - addedHexChars);
};

const prepareForEncryption = str => {
  return pad(fromString(str));
};

const normalizeAfterDecryption = str => {
  return toString(unpad(str));
};

export {
  fromString,
  toString,
  pad,
  unpad,
  prepareForEncryption,
  normalizeAfterDecryption
};
