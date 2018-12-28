import React from 'react';
import { getUniqueDates } from '../../lib/getUniqueDates';

const DateFilter = ({ setDateFilter, notes }) => {
  return (
    <form className="date-filter">
      <select onChange={e => setDateFilter(e.target.value)}>
        <option value="all">All Dates</option>
        {getUniqueDates(notes).map(date => (
          <option key={date} value={date}>
            {date}
          </option>
        ))}
      </select>
    </form>
  );
};

export default DateFilter;
