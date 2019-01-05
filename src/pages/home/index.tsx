import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { PrimaryButton } from 'components/styled/buttons'

interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FunctionComponent<HomePageProps> = ({ children }) => (
  <div>
    <PrimaryButton onClick={() => console.log('Yaaaay')}>Primary Button</PrimaryButton>
    {children}
  </div>
)

export default HomePage
