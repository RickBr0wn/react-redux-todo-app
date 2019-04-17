import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    padding: '1rem',
    minWidth: '80%',
    textAlign: 'left'
  }
})

function Todos({ todos, classes }) {
  console.log(todos)
  return todos ? (
    todos.map(todo => (
      <Paper className={classes.item} key={todo.id}>
        {todo.title}
        <IconButton className={classes.button} aria-label='Delete'>
          <DeleteIcon />
        </IconButton>
      </Paper>
    ))
  ) : (
    <p>Loading..</p>
  )
}

export default withStyles(styles)(Todos)
