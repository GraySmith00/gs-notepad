import React from 'react';

const Note = ({ text, createdAt, tag }) => {
  return (
    <div className="note">
      <h3>{text}</h3>
      <p>Time: {createdAt}</p>
      <p>Tage: {tag}</p>
    </div>
  );
};

export default Note;
