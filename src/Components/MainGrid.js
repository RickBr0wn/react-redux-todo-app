import React, { useState } from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Fab } from '@material-ui/core'
import TodoEntry from './TodoEntry'
import TodoItem from './TodoItem'
import AddIcon from '@material-ui/icons/Add'
import { addTodo, deleteTodo } from '../Store/actions'
import Title from './Title'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '28rem'
  },
  fab: {
    position: 'fixed',
    top: '90%',
    left: '60%',
    margin: theme.spacing.unit
  }
})

const MainGrid = ({ classes, onAddTodo, todos, onDeleteTodo }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid item xs={12} lg={4}>
        <Paper className={classes.paper}>
          {toggle ? (
            <TodoEntry
              addTodo={onAddTodo}
              toggle={toggle}
              setToggle={setToggle}
            />
          ) : (
            <Title todos={todos} />
          )}
          <TodoItem todos={todos} deleteTodo={onDeleteTodo} />
          {toggle ? null : (
            <Fab
              color='primary'
              aria-label='Add'
              className={classes.fab}
              onClick={() => setToggle(!toggle)}>
              <AddIcon />
            </Fab>
          )}
        </Paper>
      </Grid>
    </Grid>
  )
}

MainGrid.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = {
  onAddTodo: addTodo,
  onDeleteTodo: deleteTodo
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MainGrid)
