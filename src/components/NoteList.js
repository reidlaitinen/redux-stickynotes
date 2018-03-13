import React from 'react';
import { Grid, Card } from 'semantic-ui-react'
import NoteForm from './NoteForm'
import Note from './Note'
import { connect } from 'react-redux';

const NoteList = ({ notes }) => (

  <Grid relaxed columns={4}>
    <Grid.Column>
      <NoteForm />
    </Grid.Column>
    
    { notes.map( (n) => {
       return ( 
        <Grid.Column>
          <Note key={n.id} {...n} />
        </Grid.Column>
      )
     })
   }
  </Grid>
  
)

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(NoteList);