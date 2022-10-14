import React, { Component } from 'react'
import '../App.css';

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    
    increase=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    decrease=()=>{
        this.setState({
            count:this.state.count-1
        })
    }
  render() {
    return (
      <div className='content'>
        <button onClick={this.increase} >+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrease} >-</button>
      </div>
    )
  }
}

export default Counter
