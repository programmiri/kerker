import engine from 'store/src/store-engine';
import localStorage from 'store/storages/localStorage';
import sessionStorage from 'store/storages/sessionStorage';
import memoryStorage from 'store/storages/memoryStorage';
import json2 from 'store/plugins/json2';

const storages = [localStorage, sessionStorage, memoryStorage];
const plugins = [json2];
const store = engine.createStore(storages, plugins);

// exposes set, get, remove
export default store;
