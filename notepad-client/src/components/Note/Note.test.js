import React from 'react';
import { shallow } from 'enzyme';

import Note from './Note';

describe('Note component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Note text="new note" createdAt={1545951460092} tag="work" />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
