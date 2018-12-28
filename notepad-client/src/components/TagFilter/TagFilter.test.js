import React from 'react';
import { shallow } from 'enzyme';

import TagFilter from './TagFilter';

describe('TagFilter component', () => {
  let wrapper;
  let mockSetTagFilter;

  beforeEach(() => {
    mockSetTagFilter = jest.fn();
    wrapper = shallow(<TagFilter setTagFilter={mockSetTagFilter} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
