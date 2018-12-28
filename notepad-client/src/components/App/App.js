import React, { Component } from 'react';
import './App.css';

import { postNote, getNotes } from '../../lib/apiCalls';

import NoteForm from '../NoteForm';
import NotesList from '../NotesList';
import TagFilter from '../TagFilter';
import DateFilter from '../DateFilter';

class App extends Component {
  state = {
    notes: [],
    tagFilter: null,
    dateFilter: null
  };

  async componentDidMount() {
    const notes = await getNotes();
    this.setState({ notes });
  }

  addNote = async note => {
    const savedNote = await postNote(note);
    this.setState({ notes: [savedNote, ...this.state.notes] });
  };

  setTagFilter = value => {
    if (value === 'all') value = null;
    this.setState({ tagFilter: value });
  };

  setDateFilter = value => {
    if (value === 'all') value = null;
    this.setState({ dateFilter: value });
  };

  render() {
    const { notes, tagFilter, dateFilter } = this.state;

    return (
      <div className="App">
        <h1>NotePad</h1>
        <NoteForm addNote={this.addNote} />
        <DateFilter setDateFilter={this.setDateFilter} notes={notes} />
        <TagFilter setTagFilter={this.setTagFilter} />
        <NotesList
          notes={notes}
          tagFilter={tagFilter}
          dateFilter={dateFilter}
        />
      </div>
    );
  }
}

export default App;
