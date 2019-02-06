import styled from 'styled-components'
import { Link as RRDLink } from 'react-router-dom'

import { Section } from 'components/styled/layout'

export const IntroSection = styled(Section)``

export const NavigationSection = styled(Section)``

export const NavigationList = styled.ul`
  color: ${({ theme }) => theme.primary};
`

export const NavigationItem = styled.li``

export const Link = styled(RRDLink)`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
`
