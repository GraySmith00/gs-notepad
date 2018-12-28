import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  state = {
    text: '',
    tag: 'work'
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({ text: '', tag: 'work' });
  };

  render() {
    const { text, tag } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="note-form">
        <label htmlFor="text">
          Text
          <input
            onChange={this.handleChange}
            type="text"
            name="text"
            value={text}
            className="text-input"
          />
        </label>
        <label>
          Tag
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
        </label>
        <button>SAVE</button>
      </form>
    );
  }
}

NoteForm.propTypes = {
  addNote: PropTypes.func.isRequired
};

export default NoteForm;
