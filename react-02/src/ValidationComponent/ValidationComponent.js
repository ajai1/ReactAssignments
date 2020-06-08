import React, { Component } from "react";

class ValidationComponent extends Component {
  render() {
    let displayMessage = <p>Valid Input</p>;
    if (this.props.lengthOfText < 5 && this.props.lengthOfText != 0) {
      displayMessage = <p>Input entered is so short</p>;
    }
    if (this.props.lengthOfText > 10) {
      displayMessage = <p>Input entered exceeds 10 characters</p>;
    }

    return <div>{displayMessage}</div>;
  }
}

export default ValidationComponent;
