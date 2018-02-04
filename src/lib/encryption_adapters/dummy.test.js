import * as adapter from './dummy.js';

jest.useFakeTimers();

describe('#encrypt', () => {
  it('returns a promise', () => {
    const message = 'hello world';

    expect.assertions(1);
    adapter.encrypt(message).then(result => {
      expect(result.content).toEqual(':::ENCRYPTED::: hello world');
    });
    jest.runAllTimers();
  });

  it('can fake an error', () => {
    const message = 'hello world';

    expect.assertions(1);
    adapter
      .encrypt(message, { fakeError: 'MY ERROR MESSAGE' })
      .catch(result => {
        expect(result.error).toEqual('MY ERROR MESSAGE');
      });
    jest.runAllTimers();
  });
});

describe('#decrypt', () => {
  it('returns a promise', () => {
    const message = ':::ENCRYPTED::: hello world';

    expect.assertions(1);
    adapter.decrypt(message).then(result => {
      expect(result.content).toEqual('hello world');
    });
    jest.runAllTimers();
  });

  it('can fake an error', () => {
    const message = 'hello world';

    expect.assertions(1);
    adapter
      .decrypt(message, { fakeError: 'MY ERROR MESSAGE' })
      .catch(result => {
        expect(result.error).toEqual('MY ERROR MESSAGE');
      });
    jest.runAllTimers();
  });
});
