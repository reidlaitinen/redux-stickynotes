const notes = ( state = [], action ) => {
  switch(action.type) {
    case 'NOTES':
      return action.todos
    case 'ADD_NOTE':
      return [action.todo, ...state];
    default:
      return state
  }
}

export default todos;