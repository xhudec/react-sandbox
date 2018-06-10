// @flow
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Card from '../../components/Card';

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
            <Grid item xs={12} md={6} lg={4}>
              <Card title="React" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="create-react-app" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="react-router-dom" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="styled-components" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="Material UI" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="Prettier" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="Flow" body="todo" />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Card title="ESLint" body="todo" />
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
