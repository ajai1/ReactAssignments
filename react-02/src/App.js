import React, { Component } from "react";

import "./App.css";

import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
  state = {
    value: "Enter the value to find length",
    lengthOfText: 0,
    stringArray: null,
  };

  valueLengthHandler = (event) => {
    const inputEntered = event.target.value;
    this.setState({
      value: inputEntered,
      lengthOfText: inputEntered.length,
      stringArray: inputEntered.split(""),
    });
  };

  clearOldValue = () => {
    this.setState({
      value: "",
    });
  };

  removeCharComponent = (event, index) => {
    let stringArray = [...this.state.stringArray];
    stringArray.splice(index, 1);
    this.setState({
      stringArray: stringArray,
    });
  };

  render() {
    const inputDivStyle = {
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
      width: "50%",
    };

    let charComponents = null;

    if (this.state.lengthOfText < 10 && this.state.lengthOfText != 0) {
      charComponents = (
        <div>
          {this.state.stringArray.map((letter, index) => {
            if (letter != " ")
              return (
                <CharComponent
                  letter={letter}
                  removeCharComponent={(event) =>
                    this.removeCharComponent(event, index)
                  }
                ></CharComponent>
              );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <div>
          <input
            style={inputDivStyle}
            type="text"
            onChange={this.valueLengthHandler}
            onFocus={this.clearOldValue}
            value={this.state.value}
          ></input>
        </div>
        <ValidationComponent
          lengthOfText={this.state.lengthOfText}
        ></ValidationComponent>

        {charComponents}
      </div>
    );
  }
}

export default App;
