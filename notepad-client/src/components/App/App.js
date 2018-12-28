import React, { Component } from 'react';
import './App.scss';

import { postNote, getNotes } from '../../lib/apiCalls';
import { mockNotes } from '../../lib/mockData';

import NoteForm from '../NoteForm';
import NotesList from '../NotesList';
import TagFilter from '../TagFilter';
import DateFilter from '../DateFilter';

class App extends Component {
  state = {
    notes: mockNotes,
    tagFilter: null,
    dateFilter: null,
    getError: null,
    postError: null
  };

  async componentDidMount() {
    try {
      const notes = await getNotes();
      this.setState({ notes, getError: null });
    } catch (error) {
      this.setState({ getError: error.message });
    }
  }

  addNote = async note => {
    try {
      const savedNote = await postNote(note);
      this.setState({
        notes: [savedNote, ...this.state.notes],
        postError: null
      });
    } catch (error) {
      this.setState({ postError: error.message });
    }
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
    const { notes, tagFilter, dateFilter, postError } = this.state;

    return (
      <div className="app">
        <h1>NotePad</h1>
        <div className="app__inner">
          <div className="app__inner-top">
            <NoteForm addNote={this.addNote} postError={postError} />
            <div className="app__filters">
              <DateFilter setDateFilter={this.setDateFilter} notes={notes} />
              <TagFilter setTagFilter={this.setTagFilter} />
            </div>
          </div>
          <div className="app__inner-bottom">
            <NotesList
              notes={notes}
              tagFilter={tagFilter}
              dateFilter={dateFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
