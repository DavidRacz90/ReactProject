import React, { Component } from 'react';
import Display from './Display';
import Button from './Button';


class App extends Component {
  constructor() {
    super()
    this.state = {
      amount: 0
    }
    this.addACorn = this.addACorn.bind(this);
    this.eatOne = this.eatOne.bind(this);
    this.keyWatcher = this.keyWatcher.bind(this);
  }

  addACorn() {
    this.setState({
      amount: ++this.state.amount
    });
  }

  eatOne() {
    this.setState({
      amount: this.state.amount > 0 ? --this.state.amount : this.state.amount
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
    const { amount } = this.state;
    return (
      <div>
        <h1>Simple Golden Acorn App</h1>
        <Button
          functions={
            {
              add: this.addACorn,
              eat: this.eatOne,
              keyWatcher: this.keyWatcher
            }
          }
        />
        <Display amount={amount} />
      </div>
    );
  }

}

export default App;