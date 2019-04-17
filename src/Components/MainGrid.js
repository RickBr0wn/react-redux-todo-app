import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AddTodo from '../AddTodo'

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    padding: '2rem'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

const MainGrid = ({ classes, addTodo }) => {
  return (
    <Grid container spacing={24} className={classes.container}>
      <Grid item xs={12}>
        <AddTodo addTodo={addTodo} />
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>xs=6</Paper>
      </Grid>
    </Grid>
  )
}

MainGrid.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MainGrid)
