import styled from 'styled-components'

interface ButtonProps {
  onClick?: Function
}

export const PrimaryButton = styled('button')<ButtonProps>`
  padding: 8px 24px;
  color: ${({ theme }) => theme.primary};
  background-color: #ffffff;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 4px;
  transition: color 200ms, background-color 200ms;
  font-size: 16px;
  outline: none;

  &:hover {
    color: #ffffff;
    background-color: ${({ theme }) => theme.primary};
  }
`
