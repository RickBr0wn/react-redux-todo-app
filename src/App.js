import React from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'
import { connect } from 'react-redux'
import { addTodo } from './Store/actions'

function App({ todos, onAddTodo }) {
  return (
    <div className='todo-app container'>
      <h1 className='title'>TODOS</h1>
      <hr />
      <p className='remaining'>{`You currently have ${
        todos.length
      } todos left to complete.`}</p>
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
