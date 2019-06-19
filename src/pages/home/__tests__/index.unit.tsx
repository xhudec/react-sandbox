import React from 'react'
import { RouteComponentProps } from 'react-router-dom';

import HomePage from '..'

import renderWithRouter from '../../../../test/helpers/renderWithRouter'

const renderHomePage = (propsOverrides?: RouteComponentProps) => {
  const MOCKED_LOCATION: any = {
    pathname: '/',
    search: '',
    state: undefined,
    hash: '',
  }

  const MOCKED_HISTORY: any = {}

  const MOCKED_MATCH: any = {}

  const testUtils = renderWithRouter(
    <HomePage
      location={MOCKED_LOCATION}
      history={MOCKED_HISTORY}
      match={MOCKED_MATCH}
      {...propsOverrides}
    />
  )

  return { ...testUtils }
}

describe('<HomePage />', () => {
  it('Should be function', () => {
    expect(typeof HomePage).toBe('function')
  })

  it('Should render without crash', () => {
    renderHomePage()
  })

  it('Should contain React Sandbox heading', () => {
    const { getByText } = renderHomePage()

    getByText('React Sandbox')
  })

  it('Should contain a link to Todo App', () => {
    const { getByText } = renderHomePage()

    getByText('Todo List App')
  })
})
