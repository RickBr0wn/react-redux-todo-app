import React, { Component } from 'react'
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario cart'}
    ]
  }

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos
    })
  }

  addTodoToState = todo => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">My ToDo List</h1>
        <Todos  todos={this.state.todos}
                deleteTodo={this.deleteTodo} />
        <AddTodo addTodoToState={this.addTodoToState} />
      </div>
    )
  }
}

export default App