import React from 'react';

const TagFilter = ({ setTagFilter }) => {
  return (
    <form className="tag-filter" onChange={e => setTagFilter(e.target.value)}>
      <select>
        <option value="all">All</option>
        <option value="work">Work</option>
        <option value="personal">Personal</option>
        <option value="hobby">Hobby</option>
      </select>
    </form>
  );
};

export default TagFilter;
