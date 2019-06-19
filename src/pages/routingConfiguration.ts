import { RouteProps } from 'react-router-dom'

import HomePage from './home'
import HookExamplesPage from './hook-examples'
import ExperimentalPage from './experimental'
import NotFoundPage from './not-found'

const routingConfiguration: RouteProps[] = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: true,
    path: '/hook-examples',
    component: HookExamplesPage,
  },
  {
    exact: true,
    path: '/experimental',
    component: ExperimentalPage,
  },
  {
    exact: true,
    path: '/not-found',
    component: NotFoundPage,
  },
]

export default routingConfiguration
