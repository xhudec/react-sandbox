import React from 'react'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'

import UseFormExample from './UseFormExample'

import { TIMEOUT } from 'utils/constants'

function HookExamplesSwitch() {
  return (
    <>
      <Fade in timeout={TIMEOUT}>
        <Typography variant="h2">React Hooks Examples</Typography>
      </Fade>

      <UseFormExample />
    </>
  )
}

export default HookExamplesSwitch
