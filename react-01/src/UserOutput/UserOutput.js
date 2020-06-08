import React, { Component } from "react";

class UserOutput extends Component {
  render() {
    const paraCards = {
      padding: "20px",
      margin: "10px 20%",
      textAlign: "center",
      font: "inherit",
      border: "1px solid grey",
      backgroundColor: "#eee",
      boxShadow: "0 2px 3px #ccc",
    };

    return (
      <div>
        <p style={paraCards}>
          {this.props.children}
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default UserOutput;
