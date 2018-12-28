import React from 'react';
import { shallow } from 'enzyme';
import { mockNotes } from '../../lib/mockData';
import NotesList from './NotesList';

describe('NotesList component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <NotesList notes={mockNotes} tagFilter="work" dateFilter={null} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
