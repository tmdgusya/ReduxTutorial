import React, { Component } from "react";

import Counter from "./couter";

const propTypes = {};

const defaultProps = {};

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
