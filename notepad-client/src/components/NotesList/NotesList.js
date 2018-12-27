import React from 'react';

import Note from '../Note';

const NotesList = ({ notes }) => {
  return (
    <div className="notes-list">
      {notes.map(note => (
        <Note key={note.id} {...note} />
      ))}
    </div>
  );
};

export default NotesList;
