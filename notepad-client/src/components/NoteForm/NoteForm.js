import React, { Component } from 'react';

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
  };

  render() {
    const { text, tag } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="text">
          Text
          <input
            onChange={this.handleChange}
            type="text"
            name="text"
            value={text}
          />
        </label>
        <label>
          Tag
          <select onChange={this.handleChange} name="tag" value={tag}>
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

export default NoteForm;
