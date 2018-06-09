// @flow
import React from 'react';
import Button from '@material-ui/core/Button';

import { LogoReact } from './assets';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={LogoReact} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Button color="primary" variant="contained">
      Hello world
    </Button>
  </div>
);

export default App;
