import React, { Component } from "react";
import "./App.css";

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    inputText: "Enter the value",
  };

  changeValueHandler = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  resetValueHandler = () => {
    this.setState({
      inputText: "",
    });
  };

  render() {
    return (
      <div className="App">
        <h1>UserInput</h1>
        <UserInput
          value={this.state.inputText}
          change={this.changeValueHandler}
          reset={this.resetValueHandler}
        ></UserInput>
        <hr></hr>
        <UserOutput name={this.state.inputText}></UserOutput>
        <UserOutput name={this.state.inputText}></UserOutput>
      </div>
    );
  }
}

export default App;
