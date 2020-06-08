import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.props.change}
          value={this.props.value}
        ></input>
        <button onClick={this.props.reset}>Reset</button>
      </div>
    );
  }
}

export default UserInput;
