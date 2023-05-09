import { Component } from "react";

class ChildOne extends Component {
  constructor() {
    super();
    console.log("ChildOne constructor");
  }
  componentDidMount() {
    console.log("ChildOne componentDidMount");
  }
  render() {
    console.log("ChildOne render");
    return (
      <div>
        <h1>ChildOne</h1>
      </div>
    );
  }
}
export default ChildOne;
