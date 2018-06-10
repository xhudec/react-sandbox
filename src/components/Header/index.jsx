// @flow
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {};

type State = {};

class Header extends Component<Props, State> {
  static defaultProps = {};

  state = {};

  render() {
    return (
      <AppBar>
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="title">React Sandbox</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
