import React, { Component } from 'react';
import './App.css';

import { postNote, getNotes } from '../../lib/apiCalls';

import NoteForm from '../NoteForm';
import NotesList from '../NotesList';
import TagFilter from '../TagFilter';

class App extends Component {
  state = {
    notes: [],
    tagFilter: null
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

  render() {
    const { notes, tagFilter } = this.state;

    return (
      <div className="App">
        <h1>Hello</h1>
        <NoteForm addNote={this.addNote} />
        <TagFilter setTagFilter={this.setTagFilter} />
        <NotesList notes={notes} tagFilter={tagFilter} />
      </div>
    );
  }
}

export default App;
