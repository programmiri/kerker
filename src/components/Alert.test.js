import React from 'react';
import { shallow } from 'enzyme';
import Alert from './Alert';

it('renders without crashing', () => {
  shallow(<Alert text="text for text"/>);
});

describe('renders a alert with a custom message und custom color schema', () => {
  const wrapper = shallow(<Alert text="test text" context="test"/>);

  it('renders a div with the class alert', () => {
    expect(wrapper.hasClass('alert')).toEqual(true);
  });

  it('displays a custom text', () => {
    expect(wrapper.text()).toEqual('test text');
  });

  it('adds a custom class for context', () => {
    expect(wrapper.hasClass('alert-test')).toEqual(true);
  });
})
