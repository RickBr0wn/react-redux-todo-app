import React from 'react'
import { Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import PropTypes from 'prop-types'

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

const TodoItem = ({ todos, classes, deleteTodo }) => {
  console.log(todos)
  return todos ? (
    todos.map(todo => (
      <Paper className={classes.item} key={todo.id}>
        {todo.title}
        <IconButton
          className={classes.button}
          aria-label='Delete'
          onClick={() => deleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </Paper>
    ))
  ) : (
    <p>Loading..</p>
  )
}

TodoItem.propTypes = {
  todos: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default withStyles(styles)(TodoItem)
