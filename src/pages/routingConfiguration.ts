import { RouteProps } from 'react-router-dom'

import HomePage from './home'
import HookExamplesSwitch from './hook-examples'
import NotFoundPage from './not-found'

const routingConfiguration: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    path: '/hook-examples',
    component: HookExamplesSwitch,
  },
  {
    exact: true,
    path: '/not-found',
    component: NotFoundPage,
  },
]

export default routingConfiguration
