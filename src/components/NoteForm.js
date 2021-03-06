import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions/notes';
import { incId } from '../actions/nextId';
import { Card, Form, Input, TextArea, Button } from 'semantic-ui-react';
 
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
      <Form onSubmit={this.handleSubmit}>
        <Input fluid size='small' name='title' placeholder='Add a Note...' value={title} onChange={this.handleChange} required />
        <TextArea autoHeight fluid name='text' placeholder='Add some text...' value={text} onChange={this.handleChange} required />
        <Button type='submit'>Submit</Button>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(NoteForm);