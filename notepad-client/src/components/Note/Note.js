import React from 'react';
import { formatDate } from '../../lib/formatDate';

const Note = ({ text, createdAt, tag }) => {
  return (
    <div className="note">
      <h3>{text}</h3>
      <p>Time: {formatDate(createdAt)}</p>
      <p>Tage: {tag}</p>
    </div>
  );
};

export default Note;
