import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';


class App extends Component {
  

  addACorn() {
    this.setState({
      amount: this.state.amount + 1
    });
  }

  eatOneCorn() {
    this.setState({
      amount: this.state.amount > 0 ? this.state.amount - 1 : this.state.amount
    });
  }

  keyWatcher(e) {
    const keyActionPairs = {
      38: this.addACorn,
      40: this.eatOne
    }
    keyActionPairs[e.keyCode] ? keyActionPairs[e.keyCode]() : () => { };
  }


  render() {
    
    
  }

}

export default App;
