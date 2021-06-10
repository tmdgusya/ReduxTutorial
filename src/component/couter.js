import React, { Component } from "react";

import Value from "./Value";
import Controller from "./Controller";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Value />
        <Controller />
      </div>
    );
  }
}

export default Counter;
