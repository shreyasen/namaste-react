import { Component } from "react";

class ChildTwo extends Component {
  constructor() {
    super();
    console.log("ChildTwo constructor");
  }
  componentDidMount() {
    console.log("ChildTwo componentDidMount");
  }
  render() {
    console.log("ChildTwo render");
    return (
      <div>
        <h1>ChildTwo</h1>
      </div>
    );
  }
}
export default ChildTwo;
