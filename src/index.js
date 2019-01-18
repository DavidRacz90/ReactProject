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


import ReactDOM from 'react-dom'; 
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

