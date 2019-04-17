import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import hero from '../Images/hero.jpg'
import { relative } from 'path'

const styles = theme => ({
  background: { background: '#000', position: 'relative' },
  title: {
    color: '#fff',
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  },
  image: {
    height: '400px',
    width: '100%',
    opacity: '0.5'
  }
})

const Hero = props => {
  const { classes } = props
  return (
    <div className={classes.background}>
      <img className={classes.image} src={hero} alt={hero} />
      <div className={classes.title}>
        <h1>Todo App</h1>
        <h3>Created with React & Redux</h3>
      </div>
    </div>
  )
}

export default withStyles(styles)(Hero)
