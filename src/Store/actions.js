import v4 from 'node-uuid'

export const addTodo = function(newTodo) {
  return {
    type: 'ADD',
    id: v4(),
    title: newTodo
  }
}
