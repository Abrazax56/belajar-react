import React from "react";

class Count extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 10
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count ** 2})}>click</button>
      </div>
    )
  }
}

export default Count;