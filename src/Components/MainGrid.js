import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Grid, Fab } from '@material-ui/core'
import AddTodo from './AddTodo'
import Todos from './Todos'
import AddIcon from '@material-ui/icons/Add'

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

const Title = () => <h1>Todo App</h1>

const MainGrid = ({ classes, addTodo, todos }) => {
  const [toggle, setToggle] = useState(false)
  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid item xs={12} lg={4}>
        <Paper className={classes.paper}>
          {toggle ? (
            <AddTodo addTodo={addTodo} toggle={toggle} setToggle={setToggle} />
          ) : (
            <Title />
          )}
          <Todos todos={todos} />
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
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainGrid)
