// @flow
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
          <IconButton onClick={onClose} color="inherit">
            <CloseIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Menu
          </Typography>
        </Toolbar>
      </AppBar>
    </Styled.Container>
  </Drawer>
);

export default SideBar;
