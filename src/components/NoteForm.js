import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { incId } from '../actions/nextId';
import { Card } from 'semantic-ui-react';
 
class NoteForm extends React.Component {
  state = { title: '', text: ''}

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { title, text } = this.state
    dispatch({ type: 'ADD_NOTE', note: {id, title, text } })
    dispatch(incId())
    this.setState({ title: '', text: '' })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const {title, text} = this.state
    return (
      <div>
        <h3>Add A Note</h3>
        <form onSubmit={this.handleSubmit}>
          <label for='title'>Title</label>
          <input 
            name='title'
            value={title}
            onChange={this.handleChange}
            required
          />
          <br /><br />
          <label for='text'>Text</label>
          <textarea
            name='text'
            value={text}
            onChange={this.handleChange}
            required
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm);