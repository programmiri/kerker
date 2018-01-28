import Dropbox from 'dropbox';
import localStorage from '../localStorage';
import { deserializeAll, serializeAll } from '../notes';

const storageVersion = '1';

const localStorageKey = 'dbx_access_token';

const fileName = `notes_v${storageVersion}.json`;

let dbxClientGuest;
let dbxClientUser;

const isLoggedIn = () => !!loadAccessToken();

const redirectToLogin = (location) => {
  const authUrl = guestClient().getAuthenticationUrl(process.env.REACT_APP_DROPBOX_AUTH_URL);
  location.href = authUrl;
};

const locationContainsCredentials = (location) => !!extractAccessTokenFromLocation(location);

const saveCredentialsFromLocation = (location) => {
  const accessToken = extractAccessTokenFromLocation(location);

  if (accessToken) {
    localStorage.set(localStorageKey, accessToken);
    removeHashFromLocation(location);
    return true;
  } else {
    return false;
  }
};

const logout = () => {
  localStorage.remove(localStorageKey);
  return true;
};

const fetch = () => {
  const path = `/${fileName}`;

  const loadFile = function(resolve, reject) {
    userClient().filesDownload({ path: path })
      .then(function(response) {
        const reader = new FileReader();
        reader.addEventListener('loadend', () => {
          const notes = parseNotes(reader.result);
          resolve({ notes });
        });
        reader.readAsText(response.fileBlob);
      })
      .catch((error) => {
        reject(error);
      });
  };

  const checkAndLoad = (resolve, reject) => {
    checkIfFileExists(path)
      .then((result) => {
        if (result.exists) {
          resolve(new Promise(loadFile));
        } else {
          resolve({ notes: [] });
        }
      })
      .catch((error) => {
        reject(error);
      });
  };

  return new Promise(checkAndLoad);
};

const persist = (notes) => {
  const path = `/${fileName}`;
  const serialized = serializeAll(notes);
  const content = JSON.stringify({ notes: serialized });

  return userClient().filesUpload({ path, contents: content });
};

const loadAccessToken = () => localStorage.get(localStorageKey);

const extractAccessTokenFromLocation = (location) => {
  const hashContent = location.hash.slice(1,-1);
  const searchParams = new window.URLSearchParams(hashContent);
  return searchParams.get('access_token');
};

const removeHashFromLocation = (location) => {
  const title = document.title;
  const url = location.pathname + location.search;
  window.history.pushState('', title, url);
};

const userClient = () => {
  const accessToken = loadAccessToken();
  if (!accessToken) return null;

  if (!dbxClientUser) {
    dbxClientUser = new Dropbox({ accessToken: accessToken });
  }

  return dbxClientUser;
};

const guestClient = () => {
  const clientId = process.env.REACT_APP_DROPBOX_CLIENT_ID;
  if (!dbxClientGuest) {
    dbxClientGuest = new Dropbox({ clientId: clientId });
  }

  return dbxClientGuest;
};

const checkIfFileExists = (path) => {
  const searchOptions = { path: '', query: path, mode: 'filename', max_results: 1 };

  const searchFile = (resolve, reject) => {
    userClient().filesSearch(searchOptions)
      .then(result => {
        const match = result.matches[0];
        if (match && match.metadata.path_lower === path) {
          resolve({ exists: true });
        } else {
          resolve({ exists: false });
        }
      })
      .catch(error => {
        // TODO handle console.dir(error.response.unauthorized)
        reject(error);
      });
  };

  return new Promise(searchFile);
};

const parseNotes = (result) => {
  const parsed = JSON.parse(result);
  const notes = deserializeAll(parsed.notes);
  return notes;
};

export {
  isLoggedIn,
  redirectToLogin,
  locationContainsCredentials,
  saveCredentialsFromLocation,
  logout,
  fetch,
  persist
};
