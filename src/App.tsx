import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Pages from './pages'

import theme from 'theme/index'

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Pages />
    </ThemeProvider>
  </BrowserRouter>
)

export default App
