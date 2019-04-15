import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import { addTodo } from './Store/actions'
import UUID from './Store/uuidGen'

function App({ todos, onAddTodo }) {
  console.log(UUID())
  return (
    <div className='todo-app'>
      <h1 className='title'>TODOS</h1>
      <hr />
      <p className='remaining'>{`You currently have ${
        todos.length
      } todos left to complete.`}</p>
      <hr />
      <div className='filter-container'>
        <p>ALL</p>
        <p>COMPLETED</p>
        <p>ACTIVE</p>
      </div>
      <hr />
      <AddTodo addTodo={onAddTodo} />
      <Todos todos={todos} />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = {
  onAddTodo: addTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
