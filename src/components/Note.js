import React from 'react';
import { Card, Button, Input, Title, TextArea, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteNote, updateNote } from '../actions/notes';

class Note extends React.Component {
  state = { editMode: false, ...this.props}

  toggleEditMode() {
    this.setState({editMode: !this.state.editMode})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { title, text } = this.state
    dispatch(updateNote(this.id))
    this.toggleEditMode()
    this.setState({ title: '', text: '' })
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

   render() {
      if (this.state.editMode == false) {
        return (
          <div>
          <Card>
            <Card.Content>
              <Card.Header>
                {this.props.title}
              </Card.Header>
              <Card.Description>
                {this.props.text}
              </Card.Description>
              </Card.Content>
              <Button.Group attached='bottom'>
                <Button onClick={ () => this.toggleEditMode()} basic color='green'>Edit</Button>
                <Button onClick={ () => this.dispatch(deleteNote(this.id))} basic color='red'>Delete</Button>
              </Button.Group>
            
          </Card>
          </div>
        )
      } else {
        return (
          <Form onSubmit={this.handleSubmit}>
            <Input onChange = { () => this.handleChange()} fluid size='small' name='title' placeholder='Add a Note...' value={this.state.title} onChange={this.handleChange} required />
            <TextArea onChange = { () => this.handleChange() } autoHeight fluid name='text' placeholder='Add some text...' value={this.state.text} onChange={this.handleChange} required />
            <Button type='submit'>Submit</Button>
          </Form>
        )
      }

   }

}

export default connect()(Note);