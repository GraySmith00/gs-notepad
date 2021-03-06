import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './NoteForm.scss';

class NoteForm extends Component {
  state = {
    text: '',
    tag: 'work',
    error: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.text.length > 250) {
      this.setState({
        error: 'Sorry, your note must be under 250 characters.'
      });
    } else {
      this.props.addNote(this.state);
      this.setState({ text: '', tag: 'work', error: '' });
    }
  };

  render() {
    const { text, tag, error } = this.state;
    const { postError } = this.props;

    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="note-form">
          <textarea
            onChange={this.handleChange}
            type="text"
            name="text"
            value={text}
            className="text-input"
            placeholder="New note..."
            rows="3"
          />
          <select
            onChange={this.handleChange}
            name="tag"
            value={tag}
            className="tag-select"
          >
            <option value="work">Work</option>
            <option value="personal">Personal</option>
            <option value="hobby">Hobby</option>
          </select>

          <button>SAVE</button>
        </form>
        {postError && <p className="error-text">{postError}</p>}
        {error && <p className="error-text">{error}</p>}
      </React.Fragment>
    );
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default NoteForm;
