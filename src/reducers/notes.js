import { ADD_NOTE, DELETE_NOTE } from '../actions/notes'

const notes = ( state = [], action ) => {
  switch (action.type) {
    case ADD_NOTE:
      return [action.note, ...state]
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.note)
    default:
      return state;
  }
}

export default notes;