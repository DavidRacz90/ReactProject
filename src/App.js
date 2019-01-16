import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

class App extends Component {
  
  state = {
    amount : 0
  }

  addACorn = () => {
    this.setState({
      amount: this.state.amount + 1
    });
  }

  eatOneCorn = () => {
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
    return (
      <div> 
        <Button clickEvent={this.addACorn} name="Buy One 🌰"/>
        <h3><Display amount={this.amount} /></h3>
        <Button clickEvent={this.eatOneCorn} name="Eats one 🌰"/>
      </div>
    )
  }

}

export default App;
