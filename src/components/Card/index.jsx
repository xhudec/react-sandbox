// @flow
import React, { Component } from 'react';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';

import type { Node } from 'react';

import * as Styled from './styledComponents';

type Props = {
  title: string | Node,
  body: string | Node,
};

type State = {
  isExtended: boolean,
};

class Card extends Component<Props, State> {
  static defaultProps = {};

  state = {
    isExtended: false,
  };

  toggleExtend = () => this.setState(state => ({ isExtended: !state.isExtended }));

  render() {
    const { isExtended } = this.state;
    const { title, body } = this.props;

    return (
      <Styled.Paper onClick={this.toggleExtend}>
        <Typography variant="subheading">{title}</Typography>
        <Collapse in={isExtended}>{body}</Collapse>
      </Styled.Paper>
    );
  }
}

export default Card;
