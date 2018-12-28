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

  it('should change the state on input change', () => {
    expect(wrapper.find('.text-input').length).toEqual(1);

    wrapper
      .find('.text-input')
      .simulate('change', { target: { name: 'text', value: 'get groceries' } });

    expect(wrapper.state().text).toEqual('get groceries');
  });

  it('should change the state on select change', () => {
    expect(wrapper.find('.tag-select').length).toEqual(1);

    wrapper
      .find('.tag-select')
      .simulate('change', { target: { name: 'tag', value: 'hobby' } });

    expect(wrapper.state().tag).toEqual('hobby');
  });

  it('should call addNote on submit', () => {
    expect(wrapper.find('.note-form').length).toEqual(1);

    wrapper
      .find('.note-form')
      .simulate('submit', { preventDefault: jest.fn() });

    expect(mockAddNote).toHaveBeenCalled();
  });

  it('should reset the state', () => {
    wrapper.setState({ text: 'hi', tag: 'work' });

    wrapper
      .find('.note-form')
      .simulate('submit', { preventDefault: jest.fn() });

    expect(wrapper.state().text).toEqual('');
    expect(wrapper.state().tag).toEqual('work');
  });
});
