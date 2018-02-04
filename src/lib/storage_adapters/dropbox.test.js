import * as dropbox from './dropbox';
import localStorage from '../localStorage';

describe('isLoggedIn', () => {
  it('returns true if an access token is saved in local storage', () => {
    localStorage.set('dbx_access_token', 'TOKEN');
    expect(dropbox.isLoggedIn()).toBe(true);
    localStorage.remove('dbx_access_token');
  });

  it('returns false if no access token is saved in local storage', () => {
    expect(dropbox.isLoggedIn()).toBe(false);
  });
});

describe('redirectToLogin', () => {
  it('sets the login URL on the passed location', () => {
    const location = { href: 'http://localhost:3000' };

    dropbox.redirectToLogin(location);

    expect(location.href).toEqual(
      'https://www.dropbox.com/oauth2/authorize?response_type=token&client_id=dbx_client_id&redirect_uri=http://localhost:3000'
    );
  });
});

describe('locationContainsCredentials', () => {
  let orgURLSearchParams;
  let accessTokenInHash;

  // jsdom does not support URLSearchParams at the moment
  beforeEach(() => {
    orgURLSearchParams = global.URLSearchParams;
    global.URLSearchParams = jest.fn(() => ({
      get: () => accessTokenInHash
    }));
  });

  afterEach(() => {
    global.URLSearchParams = orgURLSearchParams;
  });

  it('returns true if the location contains an access token in the hash', () => {
    accessTokenInHash = 'TOKEN';
    const hash =
      '#access_token=TOKEN&token_type=bearer&uid=12345&account_id=ACCOUNT_ID';
    const location = { hash };

    expect(dropbox.locationContainsCredentials(location)).toBe(true);
  });

  it('returns false if the location does not contain an access token in the hash', () => {
    accessTokenInHash = null;
    const location = { hash: '' };

    expect(dropbox.locationContainsCredentials(location)).toBe(false);
  });
});

describe('saveCredentialsFromLocation', () => {
  let orgURLSearchParams;
  let accessTokenInHash;

  // jsdom does not support URLSearchParams at the moment
  beforeEach(() => {
    orgURLSearchParams = global.URLSearchParams;
    global.URLSearchParams = jest.fn(() => ({
      get: () => accessTokenInHash
    }));
  });

  afterEach(() => {
    global.URLSearchParams = orgURLSearchParams;
    localStorage.remove('dbx_access_token');
  });

  it('saves the access token and returns true', () => {
    accessTokenInHash = 'TOKEN';
    const hash =
      '#access_token=TOKEN&token_type=bearer&uid=12345&account_id=ACCOUNT_ID';
    const location = { hash };

    expect(localStorage.get('dbx_access_token')).toBeUndefined();
    expect(dropbox.saveCredentialsFromLocation(location)).toBe(true);
    expect(localStorage.get('dbx_access_token')).toEqual(accessTokenInHash);
  });

  it('returns false if no credentials exist in the hash', () => {
    accessTokenInHash = null;
    const location = { hash: '' };

    expect(localStorage.get('dbx_access_token')).toBeUndefined();
    expect(dropbox.saveCredentialsFromLocation(location)).toBe(false);
    expect(localStorage.get('dbx_access_token')).toBeUndefined();
  });

  it('removes the information from the location hash', () => {
    accessTokenInHash = 'TOKEN';
    const hash =
      '#access_token=TOKEN&token_type=bearer&uid=12345&account_id=ACCOUNT_ID';
    const location = { hash };

    global.location.hash = hash;
    expect(dropbox.saveCredentialsFromLocation(location)).toBe(true);
    expect(global.location.hash).toBe('');
  });
});

describe('fetch', () => {
  xit('checks if the file exists on Dropbox, returns empty notes otherwise', () => {});

  xit('returns the notes on Dropbox when the file exists', () => {});

  xit('handles an unauthorized error', () => {});
});

describe('persist', () => {
  xit('saves the note to Dropbox', () => {});

  xit('handles an unauthorized error', () => {});
});

describe('registerUnauthorizedCallback ', () => {
  xit('adds a callback that gets called when Dropbox API throws unauthorized error', () => {});
});

describe('logout', () => {
  it('removes the access token from local storage', () => {
    localStorage.set('dbx_access_token', 'TOKEN');
    dropbox.logout();
    expect(localStorage.get('dbx_access_token')).toBeUndefined();
  });
});
