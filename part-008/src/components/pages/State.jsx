import React from "react";

class Count extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 10
    }
    alert("constructor")
  }
  componentDidMount () {
    this.setState({count: 10})
    alert("componentDidMount")
  }
  componentDidUpdate(prevProps, prevState) {
    alert("update ")
    if(this.state.count === 10000) this.setState({count: 10})
  }
  render() {
    alert("render")
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({count: this.state.count ** 2})}>click</button>
      </div>
    )
  }
}

export default Count;