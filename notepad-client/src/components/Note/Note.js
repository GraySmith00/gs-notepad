import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../lib/formatDate';

import './Note.scss';

const Note = ({ text, createdAt, tag }) => {
  return (
    <div className="note">
      <div className="note__info">
        <p>{formatDate(createdAt)}</p>
        <p className="note__tag">{tag}</p>
      </div>
      <p className="note__text">{text}</p>
    </div>
  );
};

Note.propTypes = {
  text: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  tag: PropTypes.string.isRequired
};

export default Note;
