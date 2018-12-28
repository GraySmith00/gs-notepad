import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { postNote } from '../../lib/apiCalls';

jest.mock('../../lib/apiCalls');

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call getNotes', async () => {
    const note = {
      text: 'buy groceries',
      tag: 'hobby'
    };

    await wrapper.instance().addNote(note);

    expect(postNote).toHaveBeenCalled();
  });

  it('should add a note to state', async () => {
    const note = {
      text: 'buy groceries',
      tag: 'hobby'
    };

    const currentNotesLength = wrapper.state().notes.length;

    await wrapper.instance().addNote(note);

    expect(wrapper.state().notes.length).toEqual(currentNotesLength + 1);
  });

  it('should set a tag filter', () => {
    wrapper.instance().setTagFilter('work');
    expect(wrapper.state().tagFilter).toEqual('work');
  });

  it('should set the tag filter to null if the value is all', () => {
    wrapper.instance().setTagFilter('all');
    expect(wrapper.state().tagFilter).toEqual(null);
  });

  it('should set a date filter', () => {
    wrapper.instance().setDateFilter('12/25/2018');
    expect(wrapper.state().dateFilter).toEqual('12/25/2018');
  });

  it('should set the dateFilter to null if the value is all', () => {
    wrapper.instance().setDateFilter('all');
    expect(wrapper.state().dateFilter).toEqual(null);
  });
});
