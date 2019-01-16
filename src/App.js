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
    return (
      <div>
        <Button />
        <Display />
        <Button />
      </div>
    );
  }
  
}

export default App;