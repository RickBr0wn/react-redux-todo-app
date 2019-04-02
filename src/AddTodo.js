import React, { useState } from 'react'

function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState('')
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(newTodo)
        }}>
        <label>Add new todo item:</label>
        <input
          type='text'
          id='content'
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button type='submit'>SUBMIT</button>
      </form>
    </div>
  )
}

export default AddTodo
