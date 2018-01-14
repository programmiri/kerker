import React from 'react';
import { shallow } from 'enzyme';
import Workspace from './Workspace';

it('renders without crashing', () => {
  shallow(<Workspace />);
});
