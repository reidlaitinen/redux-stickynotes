import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/notes'

const notes = ( state = [], action ) => {
  switch (action.type) {
    case ADD_NOTE:
      return [action.note, ...state]
    case DELETE_NOTE:
      return state.filter(note => note.id !== action.note)
    case UPDATE_NOTE:
      return (state.map(note => note.id === action.note.id ? action.note : note ))
    default:
      return state;
  }
}

export default notes;