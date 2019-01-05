import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Heading1 } from 'components/styled/headings'
import { PageContainer } from 'components/styled/layout'
import * as S from './styled'

interface HomePageProps extends RouteComponentProps {}

const HomePage: React.FunctionComponent<HomePageProps> = ({ children }) => (
  <PageContainer>
    <Heading1>React Sandbox</Heading1>
    <S.NavigationSection>
      <S.NavigationList>
        <S.NavigationItem>
          <S.Link to="/todo">Todo List App</S.Link>
        </S.NavigationItem>
      </S.NavigationList>
    </S.NavigationSection>
  </PageContainer>
)

export default HomePage
