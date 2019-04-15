import UUID from './uuidGen'

export const addTodo = function(newTodo) {
  return {
    type: 'ADD',
    id: UUID(),
    title: newTodo
  }
}
