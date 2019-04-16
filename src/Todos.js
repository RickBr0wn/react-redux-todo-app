import React from 'react'

const styles = {
  item: {
    padding: '1rem',
    marginBottom: '5px',
    borderRadius: '1rem',
    width: '80%'
  }
}

function Todos({ todos }) {
  console.log(todos)
  return todos ? (
    todos.map(todo => (
      <p key={todo.id} style={styles.item}>
        {todo.title}
      </p>
    ))
  ) : (
    <p>Loading..</p>
  )
}

export default Todos
