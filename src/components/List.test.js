import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

it('renders without crashing', () => {
  shallow(<List />);
});

describe('renders a list of notes', () => {
  const wrapper = shallow(<List />);

  it('renders an ul with the class list-group', () => {
    expect(wrapper.find('ul').exists()).toEqual(true);
    expect(wrapper.hasClass('list-group')).toEqual(true);
  });
})
