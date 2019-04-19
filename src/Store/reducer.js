export default function(state = [], { type, id, title }) {
  switch (type) {
    case 'UPDATE':
      return state
    case 'ADD':
      return {
        ...state,
        todos: [...state.todos, { id, title, completed: false }]
      }
    case 'DELETE':
      const todos = state.todos.filter(item => item.id !== id)
      return { ...state, todos }
    default:
      return state
  }
}
