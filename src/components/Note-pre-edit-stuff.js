import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { deleteNote, updateNote } from '../actions/notes';

const Note = ({ id, title, text, dispatch}) => (

      <div>
      <Card>
        <Card.Content>
          <Card.Header>
            {title}
          </Card.Header>
          <Card.Description>
            {text}
          </Card.Description>
          </Card.Content>
          <Button.Group attached='bottom'>
            <Button basic color='green'>Edit</Button>
            <Button onClick={ () => dispatch(deleteNote(id))} basic color='red'>Delete</Button>
          </Button.Group>
        
      </Card>
      </div>

)

export default connect()(Note);