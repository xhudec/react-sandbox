import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, RenderResult } from 'react-testing-library'

const renderWithRouter = (ui: React.ReactNode): RenderResult =>
  render(<BrowserRouter>{ui}</BrowserRouter>)

export default renderWithRouter
