import store from './localStorage';

describe('setting a value', () => {
  it('sets a value that can be read later', () => {
    const key = 'KEY';
    const val = 'HELLO';

    store.set(key, val);
    const result = store.get(key);
    expect(result).toEqual(val);
  });
});

describe('removing a value', () => {
  it('removes a previously set value', () => {
    const key = 'KEY';
    const val = 'HELLO';

    store.set(key, val);
    store.remove(key);

    const result = store.get(key);
    expect(result).toBeUndefined();
  });
});
