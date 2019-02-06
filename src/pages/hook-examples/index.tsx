import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UseStatePage from './use-state'
import UseFormExample from './use-form'

function HookExamplesSwitch() {
  return (
    <Switch>
      <Route exact path="/hook-examples/use-state" component={UseStatePage} />
      <Route exact path="/hook-examples/use-form" component={UseFormExample} />
    </Switch>
  )
}

export default HookExamplesSwitch
