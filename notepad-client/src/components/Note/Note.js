import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../lib/formatDate';

const Note = ({ text, createdAt, tag }) => {
  return (
    <div className="note">
      <h3>{text}</h3>
      <p>Time: {formatDate(createdAt)}</p>
      <p>Tag: {tag}</p>
    </div>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired
};

export default Note;
