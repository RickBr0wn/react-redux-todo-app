import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing.unit * 2,
    width: '50%'
  },
  textField: {
    marginBottom: theme.spacing.unit * 3,
    width: '100%'
  },
  buttonContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

function AddTodo({ addTodo, classes, toggle, setToggle }) {
  const [newTodo, setNewTodo] = useState('')
  return (
    <form
      className={classes.form}
      onSubmit={e => {
        e.preventDefault()
        if (newTodo === '') {
          return null
        }
        addTodo(newTodo)
        setNewTodo('')
        setToggle(!toggle)
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
      <div className={classes.buttonContainer}>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={classes.submit}>
          Submit
        </Button>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          className={classes.submit}
          onClick={() => setToggle(!toggle)}>
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default withStyles(styles)(AddTodo)
