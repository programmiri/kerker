import uuid from 'uuid/v4';

const maxBodyLength = 500; // this is a restriction of Trezor
const maxTitleLength = 100;

const build = ({ title, body } = {}) => {
  const date = new Date();

  return {
    id: uuid(),
    title: title || '',
    body: body || '',
    bodyPersistedVersion: null,
    bodyEncrypted: null,
    createdAt: date,
    updatedAt: date
  };
};

const hasChanged = note => note.body !== note.bodyPersistedVersion;

const validate = note => {
  const errors = {};

  if (!note.id) {
    errors.id = 'can not be empty';
  }

  if (note.title.length === 0) {
    errors.title = 'can not be empty';
  }

  if (note.title.length > maxTitleLength) {
    errors.title = 'too long';
  }

  if (note.body.length === 0) {
    errors.body = 'can not be empty';
  }

  if (note.body.length > maxBodyLength) {
    errors.body = 'too long';
  }

  if (Object.entries(errors).length === 0) {
    return true;
  } else {
    return errors;
  }
};

const serialize = note => {
  return {
    id: note.id,
    title: note.title,
    bodyEncrypted: note.bodyEncrypted,
    createdAt: note.createdAt.toISOString(),
    updatedAt: note.updatedAt.toISOString()
  };
};

const serializeAll = notes => notes.map(note => serialize(note));

const deserialize = json => {
  return {
    id: json.id,
    title: json.title,
    body: null,
    bodyPersistedVersion: null,
    bodyEncrypted: json.bodyEncrypted,
    createdAt: new Date(Date.parse(json.createdAt)),
    updatedAt: new Date(Date.parse(json.updatedAt))
  };
};

const deserializeAll = json => json.map(item => deserialize(item));

export {
  build,
  hasChanged,
  validate,
  serialize,
  serializeAll,
  deserialize,
  deserializeAll
};
