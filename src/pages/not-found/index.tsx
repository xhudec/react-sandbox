import * as React from 'react'
import { Link, RouteComponentProps } from 'react-router-dom'

import { Heading1 } from 'components/styled/headings'
import { PrimaryButton } from 'components/styled/buttons'

interface NotFoundPageProps extends RouteComponentProps {}

const NotFoundPage: React.FunctionComponent<NotFoundPageProps> = () => (
  <div>
    <Heading1>404: Page Not Found</Heading1>
    <Link to="/">
      <PrimaryButton>Back to Home Page</PrimaryButton>
    </Link>
  </div>
)

export default NotFoundPage
