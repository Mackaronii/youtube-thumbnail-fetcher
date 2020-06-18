import React, { Component } from "react";
import Typical from "react-typical";

export default class MyTypical extends Component {
  render() {
    return <Typical steps={this.props.steps} loop={Infinity} wrapper="p" />;
  }
}
