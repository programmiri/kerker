import * as notes from './notes';

describe('build', () => {
  it('sets all the default attributes', () => {
    const note = notes.build();

    expect(note.title).toEqual('');
    expect(note.body).toEqual('');

    expect(note.bodyPersistedVersion).toBe(null);
    expect(note.bodyEncrypted).toBe(null);

    expect(note.updatedAt).toBeInstanceOf(Date);
    expect(note.createdAt).toBeInstanceOf(Date);
    expect(note.createdAt).toBe(note.updatedAt);
  });

  it('can pass a title to be set', () => {
    const note = notes.build({ title: 'my title' });
    expect(note.title).toEqual('my title');
  });

  it('can pass a body to be set', () => {
    const note = notes.build({ body: 'my body' });
    expect(note.body).toEqual('my body');
  });
});

describe('hasChanged', () => {
  it('has changed if the decrypted persisted version differs from current body', () => {
    const body = 'MY CURRENT BODY';
    const note = notes.build({ body });
    note.bodyPersistedVersion = 'OLD VERSION OF BODY';

    expect(notes.hasChanged(note)).toBe(true);
  });

  it('has not changed if the decrypted persisted version is the same as the current body', () => {
    const body = 'MY CURRENT BODY';
    const note = notes.build({ body });
    note.bodyPersistedVersion = note.body;

    expect(notes.hasChanged(note)).toBe(false);
  });
});

describe('validate', () => {
  let note;

  beforeEach(() => {
    note = notes.build({ title: 'my title', body: 'my body' });
  });

  it('returns true if the note is valid', () => {
    const result = notes.validate(note);
    expect(result).toBe(true);
  });

  it('returns an error object if the title is empty', () => {
    note.title = '';

    const result = notes.validate(note);
    expect(result).toEqual({ title: 'can not be empty' });
  });

  it('returns an error object if the title is too long', () => {
    note.title = 'x'.repeat(101);

    const result = notes.validate(note);
    expect(result).toEqual({ title: 'too long' });
  });

  it('returns an error object if the body is empty', () => {
    note.body = '';

    const result = notes.validate(note);
    expect(result).toEqual({ body: 'can not be empty' });
  });

  it('returns an error object if the body is too long', () => {
    note.body = 'x'.repeat(501);

    const result = notes.validate(note);
    expect(result).toEqual({ body: 'too long' });
  });
});


describe('serialize', () => {
  it('serializes only the allowed content', () => {
    const note = notes.build({ title: 'my title', body: 'my body' });
    note.bodyEncrypted = 'SECRET';

    const result = notes.serialize(note);

    expect(Object.keys(result)).toEqual([
      'title', 'bodyEncrypted', 'createdAt', 'updatedAt'
    ]);

    expect(result.title).toEqual(note.title);
    expect(result.bodyEncrypted).toEqual(note.bodyEncrypted);
    expect(result.createdAt).toEqual(note.createdAt.toISOString());
    expect(result.updatedAt).toEqual(note.updatedAt.toISOString());
  });
});

describe('deserialize', () => {
  it('deserializes to a proper note object', () => {
    const json = {
      title: 'my title',
      bodyEncrypted: 'SECRET',
      updatedAt: "2018-01-20T12:59:10.181Z",
      createdAt: "2018-01-20T12:59:10.181Z"
    };

    const result = notes.deserialize(json);

    expect(result.body).toBe(null);
    expect(result.bodyPersistedVersion).toBe(null);
    expect(result.title).toEqual(json.title);
    expect(result.bodyEncrypted).toEqual(json.bodyEncrypted);
    expect(result.updatedAt).toBeInstanceOf(Date);
    expect(result.createdAt).toBeInstanceOf(Date);
  });
});
