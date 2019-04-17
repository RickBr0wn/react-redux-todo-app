import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, TextField, Button } from '@material-ui/core'

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.text.secondary
  },
  form: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: theme.spacing.unit * 2
  },
  textField: {
    marginBottom: theme.spacing.unit * 3
  }
})

function AddTodo({ addTodo, classes }) {
  const [newTodo, setNewTodo] = useState('')
  return (
    <form
      className={classes.form}
      onSubmit={e => {
        e.preventDefault()
        addTodo(newTodo)
      }}>
      <TextField
        id='standard-with-placeholder'
        label='Enter new todo item'
        placeholder='Todo item'
        className={classes.textField}
        margin='normal'
        autoComplete='off'
        name='todoEntry'
        onChange={e => setNewTodo(e.target.value)}
      />
      <Button
        type='submit'
        fullwidth
        variant='contained'
        color='primary'
        className={classes.submit}>
        Submit
      </Button>
    </form>
  )
}

export default withStyles(styles)(AddTodo)
