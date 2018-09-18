import React, { Component } from 'react'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
      initialCount: 0
    }
    this.updateInitialCount = this.updateInitialCount.bind(this)
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }
  decrement = () => {
    this.setState({ count: this.state.count - 1 })
  }
  updateInitialCount(event) {
    var initialCount = this._initialCount.value
    var number = parseInt(initialCount.substring(0))
    this.setState({ count: number })
  }

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment!</button>
        <button onClick={this.decrement}>Decrement!</button>
        <h1>{this.state.count}</h1>

        <input type="text" ref={input => (this._initialCount = input)} />
        <button onClick={this.updateInitialCount}>Submit</button>
      </div>
    )
  }
}

export default Counter
