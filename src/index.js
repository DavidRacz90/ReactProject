import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import  clickStore  from './store';
import App from './components/App';


ReactDom.render(
  <Provider store={clickStore}>
    <App />
  </Provider>
  , document.querySelector('#root'),
  );

