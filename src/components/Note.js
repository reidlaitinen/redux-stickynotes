import React from 'react';
import { Card, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

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
          <div className='ui two buttons'>
            <Button basic color='green'>Edit</Button>
            <Button basic color='red'>Delete</Button>
          </div>
        </Card.Content>
      </Card>
      </div>

)

export default connect()(Note);