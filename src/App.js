import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';

class App extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0
    }
  }

  // onChange = (event) => {
  //   this.setState({amount: })
  // }

  render() {
    const { amount } = this.state;
    return (
      <div>
        <h1>Simple Golden Acorn App</h1>
        <Button />
        <Display amount = {amount}/>
        <Button />     
      </div>
    );
  }
  
}

export default App;