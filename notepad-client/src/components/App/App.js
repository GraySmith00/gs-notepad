import React, { Component } from 'react';
import './App.css';

import NoteForm from '../NoteForm';

class App extends Component {
  state = {
    notes: []
  };

  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <NoteForm />
      </div>
    );
  }
}

export default App;
