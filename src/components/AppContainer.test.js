import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';
import App from './App';

describe('<App Container />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<AppContainer />);
  });

  it('renders the <App /> Component', () => {
    const wrapper = shallow(<AppContainer />);
    expect(wrapper.find(App).length).toEqual(1);
  });

  it('passes all notes down to the <App /> component', () => {
    const wrapper = shallow(<AppContainer />);
    const wrapperState = wrapper.state('notes');
    const appComponentProps = wrapper.find(App).prop('notes');
    expect(wrapperState).toEqual(appComponentProps);
  });

  it('passes the login state to the <App /> component', () => {
    const wrapper = shallow(<AppContainer />);
    const wrapperState = wrapper.state('isLoggedIn');
    const appComponentProps = wrapper.find(App).prop('isLoggedIn');
    expect(wrapperState).toEqual(appComponentProps);
  });
});
