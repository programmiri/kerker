import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer';
import * as dropbox from './lib/storage_adapters/dropbox';

import * as trezor from './lib/encryption_adapters/trezor';
import * as dummy from './lib/encryption_adapters/dummy';

import registerServiceWorker from './registerServiceWorker';

const encryptionAdapters = {
  dummy: dummy,
  trezor: trezor
};
const encryption = encryptionAdapters.trezor;

ReactDOM.render(<AppContainer />, document.getElementById('root'));

registerServiceWorker();

// TODO: Just for manual tryouts, remove when in UI
window.encryption = encryption;
window.dbx = dropbox;

dropbox.registerUnauthorizedCallback(() =>
  console.error('Credentials were removed, logging out')
);

window.notes = [
  {
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    title: 'Hello',
    body: 'This is my body',
    bodyPersistedVersion: 'This is my body',
    bodyEncrypted: 'SECRET',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
