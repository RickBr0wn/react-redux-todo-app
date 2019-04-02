export default function(state = [], { type, id, title }) {
  switch (type) {
    case 'UPDATE':
      return state
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, { id, title }]
      }
    default:
      return state
  }
}
