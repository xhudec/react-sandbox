// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import * as Styled from './styledComponents';

const LandingPage = () => (
  <div>
    <Styled.Section id="intro">
      <Typography variant="display1">
        Welcome to my Sandbox project with a lot of React examples! (coming soon)
      </Typography>
    </Styled.Section>

    <Styled.Section id="dev-stack">
      <Typography variant="title" style={{ padding: '16px 0' }}>
        This Sandbox is build with these amazing tools:
      </Typography>
      <Grid container style={{ flexGrow: 1 }}>
        <Grid item xs={12}>
          <Grid container spacing={24}>
            <Grid item xs={4}>
              <Styled.Paper style={{ height: 100 }}>
                <Styled.Typography variant="subheading">React</Styled.Typography>
              </Styled.Paper>
            </Grid>
            <Grid item xs={4}>
              <Styled.Paper style={{ height: 100 }}>
                <Styled.Typography variant="subheading">create-react-app</Styled.Typography>
              </Styled.Paper>
            </Grid>
            <Grid item xs={4}>
              <Styled.Paper style={{ height: 100 }}>
                <Styled.Typography variant="subheading">react-router-dom</Styled.Typography>
              </Styled.Paper>
            </Grid>
            <Grid item xs={4}>
              <Styled.Paper style={{ height: 100 }}>
                <Styled.Typography variant="subheading">
                  <span role="img" aria-label="emoji">
                    💅
                  </span>styled-components
                </Styled.Typography>
              </Styled.Paper>
            </Grid>
            <Grid item xs={4}>
              <Styled.Paper style={{ height: 100 }}>
                <Styled.Typography variant="subheading">Material UI</Styled.Typography>
              </Styled.Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Styled.Section>

    <Styled.Section>
      <Typography variant="title" style={{ padding: '16px 0' }}>
        Lorem ipsum dolor sit amet.
      </Typography>
    </Styled.Section>
  </div>
);

export default LandingPage;
