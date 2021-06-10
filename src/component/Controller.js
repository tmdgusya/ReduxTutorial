import React, { Component } from "react";

class Controller extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button onClick={this.props.onPlus}>+</button>
        <button onClick={this.props.onSubStract}>-</button>
        <button onClick={this.props.onRadomizeColor}>Radomize Color</button>
      </div>
    );
  }
}

export default Controller;
