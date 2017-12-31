import * as hex from './hex.js';

describe('#fromString', () => {
  it('converts a string to a hex value', () => {
    const result = hex.fromString('hello world');
    expect(result).toBe('00680065006c006c006f00200077006f0072006c0064');
  });

  it('adds a padding to make sure there are at least 4 digits/16 bits', () => {
    const result = hex.fromString('0');
    expect(result).toBe('0030');
  });

  it('can handle an empty string', () => {
    const result = hex.fromString('');
    expect(result).toBe('');
  });
});

describe('#toString', () => {
  it('converts a hex value to a string', () => {
    const hexStr = '00680065006c006c006f00200077006f0072006c0064';
    const result = hex.toString(hexStr);
    expect(result).toBe('hello world');
  });

  it('can handle an empty string', () => {
    const hexStr = '';
    const result = hex.toString(hexStr);
    expect(result).toBe('');
  });
});

describe('padding', () => {
  // hello world, length of 44, next would be 64, so we are missing 20
  const hexStr = '00680065006c006c006f00200077006f0072006c0064';
  // we are missing five fives (5 * 4 = the 20 missing)
  const padding = '00050005000500050005';

  describe('#pad', () => {
    it('it pads a hex string to a multiple of 32', () => {
      const result = hex.pad(hexStr);
      expect(result).toBe(hexStr + padding);
    });
  });

  describe('#unpad', () => {
    it('removes the padded information', () => {
      const result = hex.unpad(hexStr + padding);
      expect(result).toBe(hexStr);
    });
  });
});

describe('encryption helper functions', () => {
  it('the helpers are compatible with each other', () => {
    const body = 'hello world';
    const result = hex.normalizeAfterDecryption(hex.prepareForEncryption(body));

    expect(result).toBe(body);
  });

  describe('#prepareForEncryption', () => {
    it('prepares a hexadecimal string with padding', () => {
      const body = 'hello world';
      const result = hex.prepareForEncryption(body);

      expect(result.length % 32).toBe(0);
      expect(result.match(/[0-9a-f]+/g)[0]).toBe(result);
    });
  });

  describe('#normalizeAfterDecryption', () => {
    // hello world, length of 44, next would be 64, so we are missing 20
    const hexStr = '00680065006c006c006f00200077006f0072006c0064';
    // we are missing five fives (5 * 4 = the 20 missing)
    const padding = '00050005000500050005';
    it('takes a hexadecimal, padded string and normalizes it', () => {
      const result = hex.normalizeAfterDecryption(hexStr + padding);

      expect(result).toBe('hello world');
    });
  });
});
