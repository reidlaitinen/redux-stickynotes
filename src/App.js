import React from 'react';
import NoteList from './components/NoteList';
import './App.css';
import {Container, Segment, Header} from 'semantic-ui-react';

const App = () => ( 
  <Container>
    <Segment basic textAlign='center'>
      <Header as="h1">Sticky Notes</Header>
    </Segment>
    <NoteList />
  </Container>
);


export default App;