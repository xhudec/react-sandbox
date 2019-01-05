import { RouteProps } from 'react-router-dom'

import HomePage from './home'
import TodoPage from './todo'
import NotFoundPage from './not-found'

const routingConfiguration: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: true,
    path: '/todo',
    component: TodoPage,
  },
  {
    exact: true,
    path: '/not-found',
    component: NotFoundPage,
  },
]

export default routingConfiguration
