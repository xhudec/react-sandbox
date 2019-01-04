import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { PrimaryButton } from 'components/styled/buttons'

interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FunctionComponent<HomePageProps> = () => (
  <div>
    <PrimaryButton onClick={() => console.log('Yaaaay')}>Primary Button</PrimaryButton>
  </div>
)

export default HomePage
