import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import toJson from 'enzyme-to-json';
import List from './List';
import ListOptions from './ListOptions';
import Note from './Note';
import NoteDetails from './NoteDetails';

const notesFixtures = [
  {
    id: '109156be-c4fb-41ea-b1b4-efe1671c5836',
    title: 'Hello',
    body: 'This is my body',
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

describe('<App /> when logged in', () => {
  it('renders without crashing', () => {
    shallow(<App notes={notesFixtures} isLoggedIn={true} />);
  });

  it('renders <ListOptions />, <List />, <NoteDetails /> and <Note /> components', () => {
    const wrapper = shallow(<App notes={notesFixtures} isLoggedIn={true} />);
    expect(wrapper.find(ListOptions).exists()).toBe(true);
    expect(wrapper.find(List).exists()).toBe(true);
    expect(wrapper.find(NoteDetails).exists()).toBe(true);
    expect(wrapper.find(Note).exists()).toBe(true);
  });

  it('snapshot test', () => {
    const wrapper = shallow(<App notes={notesFixtures} isLoggedIn={true} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<App /> when not logged in', () => {
  it('renders without crashing', () => {
    shallow(<App notes={notesFixtures} isLoggedIn={false} />);
  });

  it('does not renders <Notes />', () => {
    const wrapper = shallow(<App notes={notesFixtures} isLoggedIn={false} />);
    expect(wrapper.find(Note).exists()).toBe(false);
  });
});
