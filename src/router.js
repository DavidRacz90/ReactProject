import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AppWithState from '../src/Links/states';
import AppWithRedux from '../src/Links/redux';
import NavBar from '../src/Components/Navbar';
import HomePage from './Links/home';


class Router extends Component {
  renderRoutes = () => {
    return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/simple/states" component={AppWithState}/>
        <Route exact path="/simple/redux" component={AppWithRedux}/>
      </div>
    </BrowserRouter>)
  };
};

export default Router;