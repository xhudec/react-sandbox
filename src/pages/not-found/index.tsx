import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { H1 } from 'components/styled/headings'
import { PrimaryButton } from 'components/styled/buttons'

interface NotFoundPageProps extends RouteComponentProps {}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = () => (
  <main>
    <H1>404: Page Not Found</H1>
    <Link to="/">
      <PrimaryButton>Back to Home Page</PrimaryButton>
    </Link>
  </main>
)

export default NotFoundPage
