import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import { addTodo } from './Store/actions'
import UUID from './Store/uuidGen'
import MainGrid from './Components/MainGrid'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './Components/Theme'
import Hero from './Components/Hero'

function App({ todos, onAddTodo }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Hero />
      <MainGrid addTodo={onAddTodo} todos={todos} />
    </MuiThemeProvider>
  )
}

// Photo by MontyLov on Unsplash

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
