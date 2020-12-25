import React, { Component } from "react";

import "./App.css";
import axios from "axios";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    advice: "",
  };
  componentDidMount() {
    console.log("com didi mount");
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="App">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give me advice!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;
