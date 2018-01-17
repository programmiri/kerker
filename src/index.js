import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './components/AppContainer';

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
