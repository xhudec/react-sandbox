import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  margin-top: 8px;
  color: #ffffff;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`

export const Input = styled.input`
  margin-top: 4px;
  padding: 4px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  outline: none;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`

export const FormControl = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`
