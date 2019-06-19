import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import blue from '@material-ui/core/colors/blue'
import amber from '@material-ui/core/colors/amber'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: blue[300],
      main: blue[300],
      dark: blue[300],
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[700],
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        marginBottom: 16,
      },
      h2: {
        marginBottom: 16,
      },
      h3: {
        marginBottom: 16,
      },
      h4: {
        marginBottom: 16,
      },
      h5: {
        marginBottom: 8,
      },
      h6: {
        marginBottom: 8,
      },
    },
    MuiInput: {
      root: {
        marginBottom: 16,
      },
    },
  },
})

export default theme
