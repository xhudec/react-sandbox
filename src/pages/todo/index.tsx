import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import TodoList from './TodoList'

import { Heading1 } from 'components/styled/headings'
import { PageContainer } from 'components/styled/layout'
import * as S from './styled'

interface TodoPageProps extends RouteComponentProps {}

const TodoPage: React.FunctionComponent<TodoPageProps> = () => (
  <PageContainer>
    <Heading1>Todo List</Heading1>
    <S.ApplicationSection>
      <TodoList />
    </S.ApplicationSection>
  </PageContainer>
)

export default TodoPage
