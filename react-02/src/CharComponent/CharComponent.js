import React, { Component } from "react";

import "../CharComponent/CharComponent.css";

class CharComponent extends Component {
  render() {
    return (
      <div className="CharComponent" onClick={this.props.removeCharComponent}>
        <p>{this.props.letter}</p>
      </div>
    );
  }
}

export default CharComponent;
