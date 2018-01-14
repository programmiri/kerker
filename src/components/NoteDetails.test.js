import React from 'react';
import { shallow } from 'enzyme';
import NoteDetails from './NoteDetails';

it('renders without crashing', () => {
  shallow(<NoteDetails />);
});
