import React from 'react'

const Title = ({ todos }) => {
  console.log(todos.length)
  if (todos.length === 0) {
    return <h1>Enter a todo item</h1>
  } else if (todos.length === 1) {
    return <h1>{`You have ${todos.length} todo left to complete.`}</h1>
  }

  return <h1>{`You have ${todos.length} todos left to complete.`}</h1>
}

export default Title
