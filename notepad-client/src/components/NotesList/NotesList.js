import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../lib/formatDate';
import Note from '../Note';

class NotesList extends Component {
  render() {
    const { notes, tagFilter, dateFilter } = this.props;

    let displayNotes = notes;

    if (tagFilter) {
      displayNotes = displayNotes.filter(note => note.tag === tagFilter);
    }

    if (dateFilter) {
      displayNotes = displayNotes.filter(
        note => formatDate(note.createdAt) === dateFilter
      );
    }

    displayNotes = displayNotes.map(note => <Note key={note.id} {...note} />);

    return <div className="notes-list">{displayNotes}</div>;
  }
}

NotesList.propTypes = {
  notes: PropTypes.array.isRequired,
  tagFilter: PropTypes.string,
  dateFilter: PropTypes.string
};

export default NotesList;
