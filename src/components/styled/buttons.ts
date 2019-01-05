import styled from 'styled-components'

interface ButtonProps {
  onClick?: Function
}

export const PrimaryButton = styled('button')<ButtonProps>`
  border: 1px solid white;
`
