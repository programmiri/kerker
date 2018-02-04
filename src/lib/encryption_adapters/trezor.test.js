import * as adapter from './trezor.js';
import * as hex from '../hex.js';

let mockEncryptionSuccess = jest.fn((...args) => {
  const cb = args[args.length - 1];
  cb({ success: true, value: 'VALUE' });
});

let mockDecryptionSuccess = jest.fn((...args) => {
  const cb = args[args.length - 1];
  // 'hello world' in hex and padded
  const value =
    '00680065006c006c006f00200077006f0072006c006400050005000500050005';
  cb({ success: true, value: value });
});

let mockFailure = jest.fn((...args) => {
  const cb = args[args.length - 1];
  cb({ success: false, error: 'ERROR' });
});

global.TrezorConnect = {
  cipherKeyValue: null
};

const expectedPath = "m/10016'/0";
const expectedKey = 'Unlock KERKER?';
const expectedConfirmEncryption = false;
const expectedConfirmDecryption = false;

describe('#encrypt', () => {
  describe('successful encryption', () => {
    beforeEach(
      () => (global.TrezorConnect.cipherKeyValue = mockEncryptionSuccess)
    );

    it('returns a promise that resolves with the result', () => {
      expect.assertions(1);
      return expect(adapter.encrypt('PLAIN')).resolves.toEqual({
        content: 'VALUE'
      });
    });

    it('calls the trezor API with the expected arguments', () => {
      expect.assertions(7);

      global.TrezorConnect.cipherKeyValue = jest.fn((...args) => {
        expect(args[0]).toEqual(expectedPath);
        expect(args[1]).toEqual(expectedKey);
        expect(args[2]).toEqual(hex.prepareForEncryption('PLAIN'));
        expect(args[3]).toEqual(true);
        expect(args[4]).toEqual(expectedConfirmEncryption);
        expect(args[5]).toEqual(expectedConfirmDecryption);
        mockEncryptionSuccess.apply(null, args);
      });

      return expect(adapter.encrypt('PLAIN')).resolves.toEqual({
        content: 'VALUE'
      });
    });
  });

  describe('failing encryption', () => {
    beforeEach(() => (global.TrezorConnect.cipherKeyValue = mockFailure));

    it('returns a promise that rejects with an error', () => {
      expect.assertions(1);
      return expect(adapter.encrypt('PLAIN')).rejects.toEqual({
        error: 'ERROR'
      });
    });
  });
});

describe('#decrypt', () => {
  beforeEach(
    () => (global.TrezorConnect.cipherKeyValue = mockDecryptionSuccess)
  );

  describe('successful decryption', () => {
    it('returns a promise that resolves with the result', () => {
      expect.assertions(1);
      return expect(adapter.decrypt('SECRET')).resolves.toEqual({
        content: 'hello world'
      });
    });

    it('calls the trezor API with the expected arguments', () => {
      expect.assertions(7);

      global.TrezorConnect.cipherKeyValue = jest.fn((...args) => {
        expect(args[0]).toEqual(expectedPath);
        expect(args[1]).toEqual(expectedKey);
        expect(args[2]).toEqual('SECRET');
        expect(args[3]).toEqual(false);
        expect(args[4]).toEqual(expectedConfirmEncryption);
        expect(args[5]).toEqual(expectedConfirmDecryption);
        mockDecryptionSuccess.apply(null, args);
      });

      return expect(adapter.decrypt('SECRET')).resolves.toEqual({
        content: 'hello world'
      });
    });
  });

  describe('failing decryption', () => {
    beforeEach(() => (global.TrezorConnect.cipherKeyValue = mockFailure));

    it('returns a promise that rejects with an error', () => {
      expect.assertions(1);
      return expect(adapter.encrypt('PLAIN')).rejects.toEqual({
        error: 'ERROR'
      });
    });
  });
});
