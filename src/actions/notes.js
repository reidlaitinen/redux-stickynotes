export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = (note) => {
  return { type: ADD_NOTE, note }
}

export const deleteNote = (note) => {
  return { type: DELETE_NOTE, note}
}