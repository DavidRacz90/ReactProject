import React from 'react';
import ReactDOM from 'react-dom';
import  clickStore  from '../src/redux/store';
import { Provider } from 'react-redux';
import Router from './router';

ReactDOM.render(
  <Provider store={clickStore}>
    <Router />
  </Provider>,
  document.querySelector('#root')
)