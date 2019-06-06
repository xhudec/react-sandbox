import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import { TIMEOUT, TRANSITION_DELAY } from 'utils/constants'

function HomePage(props: RouteComponentProps) {
  return (
    <>
      <Fade in timeout={TIMEOUT}>
        <Typography variant="h2">🏡Home</Typography>
      </Fade>

      <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 2}ms` }}>
        <Typography>Hello folks! 👋</Typography>
      </Fade>

      <Fade in timeout={TIMEOUT} style={{ transitionDelay: `${TRANSITION_DELAY * 3}ms` }}>
        <Typography>Welcome to my personal React Sandbox!</Typography>
      </Fade>
    </>
  )
}

export default HomePage
