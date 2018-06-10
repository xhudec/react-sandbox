// @flow
import styled from 'styled-components';
import MUIPaper from '@material-ui/core/Paper';

export const Paper = styled(MUIPaper)`
  padding: 16px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  transition: box-shadow 250ms ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.3);
  }
`;
