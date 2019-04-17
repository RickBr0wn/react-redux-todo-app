import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  input: {
    border: 'none',
    borderBottom: `1px solid ${theme.palette.text.secondary}`
  },
  form: {
    display: 'flex',
    flexDirection: 'coloumn'
  }
})

function AddTodo({ addTodo, classes }) {
  const [newTodo, setNewTodo] = useState('')
  return (
    <Paper className={classes.paper}>
      <form
        className={classes.form}
        onSubmit={e => {
          e.preventDefault()
          addTodo(newTodo)
        }}>
        <label>Add new todo item: </label>
        <input
          type='text'
          id='content'
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
          className={classes.input}
        />
        <button type='submit'>SUBMIT</button>
      </form>
    </Paper>
  )
}

export default withStyles(styles)(AddTodo)
