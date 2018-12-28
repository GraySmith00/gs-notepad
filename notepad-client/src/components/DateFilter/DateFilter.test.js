import React from 'react';
import { shallow } from 'enzyme';
import DateFilter from './DateFilter';
import { mockNotes } from '../../lib/mockData';

describe('DateFilter component', () => {
  let wrapper;
  let mockSetDateFilter;

  beforeEach(() => {
    mockSetDateFilter = jest.fn();
    wrapper = shallow(
      <DateFilter notes={mockNotes} setDateFilter={mockSetDateFilter} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
