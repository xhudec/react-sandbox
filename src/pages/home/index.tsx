import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { PageContainer } from 'components/styled/layout'
import { H1, H2 } from 'components/styled/headings'
import * as S from './styled'

interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FunctionComponent<HomePageProps> = ({ children }) => (
  <PageContainer>
    <H1>React Sandbox</H1>

    <S.NavigationSection>
      <H2>Hook Examples</H2>
      <S.NavigationList>
        <S.NavigationItem>
          <S.Link to="/hook-examples/use-state">React.useState</S.Link>
        </S.NavigationItem>
        <S.NavigationItem>
          <S.Link to="/hook-examples/use-form">Custom.useForm</S.Link>
        </S.NavigationItem>
      </S.NavigationList>
    </S.NavigationSection>
  </PageContainer>
)

export default HomePage
