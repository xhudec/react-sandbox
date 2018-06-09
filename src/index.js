// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import registerServiceWorker from './utils/registerServiceWorker';

import './index.css';
// $FlowFixMe
ReactDOM.render(<App />, document.getElementById('root')); // eslint-disable-line react/jsx-filename-extension
registerServiceWorker();
