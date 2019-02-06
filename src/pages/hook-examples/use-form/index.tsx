import React from 'react'

import { H1 } from 'components/styled/headings'
import { PageContainer } from 'components/styled/layout'
import { PrimaryButton } from 'components/styled/buttons'
import * as S from './styled'

import useForm from 'hooks/useForm'

function UseFormExample() {
  const { values, handleChange, handleBlur, handleSubmit, handleReset, isSubmitting } = useForm({
    initialValues: { firstName: '', lastName: '', email: '' },
    onSubmit: async values => console.log(values),
  })

  return (
    <PageContainer>
      <H1>
        Custom Hook example: <pre>useForm</pre>
      </H1>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="firstName">First name</S.Label>
        <S.Input
          id="firstName"
          name="firstName"
          type="text"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <S.Label htmlFor="lastName">Last name</S.Label>
        <S.Input
          id="lastName"
          name="lastName"
          type="text"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          id="email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <S.FormControl>
          <PrimaryButton onClick={handleReset}>Reset</PrimaryButton>
          <PrimaryButton type="submit">Submit</PrimaryButton>
        </S.FormControl>
      </S.Form>
    </PageContainer>
  )
}

export default UseFormExample
