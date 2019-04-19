import UUID from './uuidGen'

export const addTodo = function(newTodo) {
  return {
    type: 'ADD',
    id: UUID(),
    title: newTodo
  }
}

export const deleteTodo = function(id) {
  return {
    type: 'DELETE',
    id
  }
}
