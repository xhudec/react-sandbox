// @flow
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '../components/Header';
import SideBar from '../components/SideBar';
import LandingPage from './LandingPage';

import * as Styled from './styledComponents';

type Props = {};

type State = {
  sidebarIsOpen: boolean,
};

class Root extends Component<Props, State> {
  state = {
    sidebarIsOpen: false,
  };

  openSideBar = () => this.setState({ sidebarIsOpen: true });
  closeSideBar = () => this.setState({ sidebarIsOpen: false });

  render() {
    const { sidebarIsOpen } = this.state;

    return (
      <Styled.Layout>
        <Header openSideBar={this.openSideBar} />
        <SideBar isOpen={sidebarIsOpen} onClose={this.closeSideBar} />
        <Styled.Body>
          <Switch>
            <Route path="/" component={LandingPage} />
          </Switch>
        </Styled.Body>
      </Styled.Layout>
    );
  }
}

export default Root;
