import React from 'react';
import { shallow } from 'enzyme';
import ListItem from './ListItem';

it('renders without crashing', () => {
<<<<<<< Updated upstream
  shallow(<ListItem />);
=======
  <ListItem
    id={noteFixture.id}
    title={noteFixture.title}
    createdAt={noteFixture.createdAt}
    key={noteFixture.id}
  />;
});

describe('renders a list item', () => {
  const wrapper = shallow(
    <ListItem
      id={noteFixture.id}
      title={noteFixture.title}
      createdAt={noteFixture.createdAt}
      key={noteFixture.id}
    />
  );

  it('renders an li element with the class list-group-item', () => {
    expect(wrapper.hasClass('list-group-item')).toEqual(true);
  });

  it('displays a custom text as name', () => {
    expect(wrapper.text()).toContain(noteFixture.title);
  });

  it('contains a date in the format YYYY-MM-DD', () => {
    expect(wrapper.text()).toContain('2018-02-04');
  });
>>>>>>> Stashed changes
});
