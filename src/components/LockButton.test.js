import React from 'react';
import { shallow } from 'enzyme';
import LockButton from './LockButton';

const notesFixtures = [
  {
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    title: 'Hello',
    body: null,
    bodyPersistedVersion: 'This is my body',
    bodyEncrypted: 'SECRET',
    createdAt: new Date(1517743704 * 1000),
    updatedAt: new Date(1517743704 * 1000)
  },
  {
    id: '209156be-c4fb-41ea-b1b4-efe1671c5836',
    title: 'Another note',
    body: 'Another body',
    bodyPersistedVersion: 'Another body',
    bodyEncrypted: 'SECRET2',
    createdAt: new Date(1517743704 * 1000),
    updatedAt: new Date(1517743704 * 1000)
  }
];

const currentNoteFixtureEncoded = notesFixtures[0];
const currentNoteFixtureDecoded = notesFixtures[1];

describe('<LockButton />', () => {
  it('renders without crashing', () => {
    shallow(<LockButton currentNote={currentNoteFixtureEncoded} />);
  });
});

describe('<LockButton />', () => {
  it('shows a lock icon if the current note is encoded', () => {
    const wrapper = shallow(
      <LockButton currentNote={currentNoteFixtureEncoded} />
    );
    expect(wrapper.find('i').hasClass('fa-lock')).toEqual(true);
  });

  it('shows a unlocked icon if the current note is decoded', () => {
    const wrapper = shallow(
      <LockButton currentNote={currentNoteFixtureDecoded} />
    );
    expect(wrapper.find('i').hasClass('fa-unlock')).toEqual(true);
  });
});
