import React from 'react';
import { shallow } from 'enzyme';
import { mockNotes } from '../../lib/mockData';
import NotesList from './NotesList';
import Note from '../Note';

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

  it('should filter the notes if there is a valid tagFilter', () => {
    wrapper = shallow(
      <NotesList notes={mockNotes} tagFilter="work" dateFilter={null} />
    );

    expect(wrapper.children().find(Note).length).toEqual(2);
  });

  it('should filter the notes if there is a valid dateFilter', () => {
    wrapper = shallow(
      <NotesList notes={mockNotes} tagFilter={null} dateFilter={'12/21/2018'} />
    );

    expect(wrapper.children().find(Note).length).toEqual(1);
  });
});
