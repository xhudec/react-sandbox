import * as React from 'react'
import { render } from 'react-testing-library'

import HomePage from '..'

describe('<HomePage />', () => {
  it('Should be function', () => {
    expect(typeof HomePage).toBe('function')
  })

  it('Should render without crash', () => {
    render(<HomePage location={{}} history={{}} match={{}} />)
  })
})
