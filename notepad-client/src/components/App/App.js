import React, { Component } from 'react';
import './App.css';
import { postNote } from '../../lib/apiCalls';

import NoteForm from '../NoteForm';

class App extends Component {
  state = {
    notes: []
  };

  addNote = async note => {
    const savedNote = await postNote(note);
    this.setState({ notes: [...this.state.notes, savedNote] });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <NoteForm addNote={this.addNote} />
      </div>
    );
  }
}

export default App;
