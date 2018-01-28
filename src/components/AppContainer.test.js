import React from 'react';
import { shallow } from 'enzyme';
import AppContainer from './AppContainer';

it('renders without crashing', () => {
  shallow(<AppContainer />);
});
