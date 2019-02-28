import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/styles'

import Layout from 'components/Layout'
import Pages from './pages'

import theme from './theme'

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Pages />
          </Layout>
        </ThemeProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}

export default App
