import React, { Component} from 'react';


class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    document.querySelector('body').addEventListener('keydown', this.props.functions.keyWatcher)
  }

  
  render() {
    const { amount } = this.props
    const { add, eat } = this.props.functions
    return (
      <div>
        <div>
          <button onClick={add}>
             Buy one
          </button>
        </div>
        <div> 
         { amount }
        </div>
        <div>
          <button onClick={eat}>
            Eat one
          </button>
        </div>
      </div>
    )
  }
}

export default Button;