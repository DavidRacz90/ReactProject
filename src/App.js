import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

class App extends Component {

  state = {
    amount: 0
  }

  addACorn = () => {
    this.setState({
      amount: this.state.amount + 1
    });
  }

  eatACorn = () => {
    this.setState({
      amount: this.state.amount > 0 ? this.state.amount - 1 : this.state.amount
    });
  }

  render() {
    return (
      <div>
        <Button clickEvent={this.addACorn} name="Buy One 🌰" />
        <h3><Display amount={this.state.amount} nut="🌰" /></h3>
        <Button clickEvent={this.eatACorn} name="Eats one 🌰" />
      </div>
    )
  }

}

export default App;
