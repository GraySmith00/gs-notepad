import React from 'react';
import { shallow } from 'enzyme';

import NoteForm from './NoteForm';

describe('NoteForm component', () => {
  let wrapper;
  let mockAddNote;

  beforeEach(() => {
    mockAddNote = jest.fn();
    wrapper = shallow(<NoteForm addNote={mockAddNote} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
