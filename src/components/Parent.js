import { Component } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

class Parent extends Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("parent componentDidMount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>Parent</h1>
        <ChildOne />
        <ChildTwo />
      </div>
    );
  }
}
export default Parent;
