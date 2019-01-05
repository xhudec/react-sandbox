import * as React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { Heading1 } from 'components/styled/headings'

interface TodoPageProps extends RouteComponentProps {}

const TodoPage: React.FunctionComponent<TodoPageProps> = () => (
  <div>
    <Heading1>Todo List Example</Heading1>
  </div>
)

export default TodoPage
