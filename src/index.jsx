import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

require('bootstrap');
import 'bootstrap/dist/css/bootstrap.min.css';

require('./stylesheets/styles.scss');

ReactDom.render(
  <App />,
  document.querySelector('#app')
);
