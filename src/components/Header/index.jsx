// @flow
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

type Props = {
  openSideBar: Function,
};

type State = {};

class Header extends Component<Props, State> {
  static defaultProps = {};

  state = {};

  render() {
    const { openSideBar } = this.props;

    return (
      <AppBar>
        <Toolbar>
          <IconButton onClick={openSideBar} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">React Sandbox</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
