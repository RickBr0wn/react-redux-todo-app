import { createMuiTheme } from '@material-ui/core/styles'
import { pink, indigo } from '@material-ui/core/colors'

export default createMuiTheme({
  pallette: {
    primary: pink,
    secondary: indigo
  },
  typography: {
    useNextVariants: true
  }
})
