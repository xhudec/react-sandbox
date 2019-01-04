import * as React from 'react'
import { Switch, Route, RouteProps } from 'react-router-dom'

import HomePage from './home'

const routing: RouteProps[] = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/todo',
    render: () => <div>Todo List</div>,
  },
  {
    path: '/not-found',
    render: () => <div>404: Not Found</div>,
  },
]

interface PagesProps {}

const Pages: React.FunctionComponent<PagesProps> = () => (
  <Switch>
    {routing.map(route => (
      <Route {...route} />
    ))}
  </Switch>
)

export default Pages
