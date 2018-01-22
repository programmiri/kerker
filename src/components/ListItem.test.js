import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

it('renders without crashing', () => {
  shallow(<ListItem />);
});

describe('renders a list of notes', () => {
  const wrapper = shallow(<ListItem name="This is the name of the note" />);

  it('renders an li element with the class list-group-item', () => {
    expect(wrapper.hasClass('list-group-item')).toEqual(true);
  });

  it('displays a custom text as name', () => {
    expect(wrapper.text()).toEqual('This is the name of the note');
  });



})
