import * as React from 'react'
import { Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import routingConfiguration from './routingConfiguration'

const Pages: React.FC = () => (
  <Switch>
    {routingConfiguration.map(route => (
      <Route key={String(route.path)} {...route} />
    ))}
    <Redirect to="/not-found" />
  </Switch>
)

export default Pages
