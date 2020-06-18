import React, { Component } from "react";
import Home from "./screens/Home/Home.jsx";

class App extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#C4302B";
    document.body.style.padding = "20px";
  }
  render() {
    return <Home />;
  }
}

export default App;
