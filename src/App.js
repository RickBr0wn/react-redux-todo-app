import React from 'react'
import MainGrid from './Components/MainGrid'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import theme from './Components/Theme'
import Hero from './Components/Hero'

function App({ todos, onAddTodo }) {
  return (
    <MuiThemeProvider theme={theme}>
      <Hero />
      <MainGrid />
    </MuiThemeProvider>
  )
}

// Photo by MontyLov on Unsplash

export default App
