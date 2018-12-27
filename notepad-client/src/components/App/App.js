import React, { Component } from 'react';
import './App.css';

import { postNote, getNotes } from '../../lib/apiCalls';

import NoteForm from '../NoteForm';
import NotesList from '../NotesList';

class App extends Component {
  state = {
    notes: []
  };

  async componentDidMount() {
    const notes = await getNotes();
    this.setState({ notes });
  }

  addNote = async note => {
    const savedNote = await postNote(note);
    this.setState({ notes: [...this.state.notes, savedNote] });
  };

  render() {
    const { notes } = this.state;

    return (
      <div className="App">
        <h1>Hello</h1>
        <NoteForm addNote={this.addNote} />
        <NotesList notes={notes} />
      </div>
    );
  }
}

export default App;
