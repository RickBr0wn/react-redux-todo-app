import React from 'react'

function Todos({ todos }) {
  console.log(todos)
  return todos ? (
    todos.map(todo => <p key={todo.id}>{todo.title}</p>)
  ) : (
    <p>Loading..</p>
  )
}

export default Todos
