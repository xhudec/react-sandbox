import React from 'react'

import HomePage from '..'

import { renderWithRouter } from '../../../../test/helpers'

const renderHomePage = (extraProps?: any) => {
  const MOCKED_LOCATION: any = {
    pathname: '/',
    search: '',
    state: undefined,
    hash: '',
  }

  const MOCKED_HISTORY: any = {}

  const MOCKED_MATCH: any = {}

  const utils = renderWithRouter(
    <HomePage
      location={MOCKED_LOCATION}
      history={MOCKED_HISTORY}
      match={MOCKED_MATCH}
      {...extraProps}
    />
  )

  return { ...utils }
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
