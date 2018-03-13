import { ADD_NOTE } from '../actions/notes'

const notes = ( state = [], action ) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [action.note, ...state]
    default:
      return state;
  }
}

export default notes;