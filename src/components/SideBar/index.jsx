// @flow
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import * as Styled from './styledComponents';

type Props = {
  isOpen: boolean,
  onClose: Function,
};

const SideBar = ({ isOpen, onClose }: Props) => (
  <Drawer open={isOpen} onClose={onClose}>
    <Styled.Container>
      <AppBar>
        <Toolbar>
          <Typography variant="title" color="inherit">Menu</Typography>
        </Toolbar>
      </AppBar>
    </Styled.Container>
  </Drawer>
);

export default SideBar;
