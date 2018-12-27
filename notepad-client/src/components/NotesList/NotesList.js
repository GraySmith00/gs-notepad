import React, { Component } from 'react';

import Note from '../Note';

class NotesList extends Component {
  render() {
    const { notes, tagFilter } = this.props;

    let displayNotes = notes;

    if (tagFilter) {
      displayNotes = displayNotes.filter(note => note.tag === tagFilter);
    }

    displayNotes = displayNotes.map(note => <Note key={note.id} {...note} />);

    return <div className="notes-list">{displayNotes}</div>;
  }
}

export default NotesList;
