import React, { Component } from "react";
import "./ErrorDetails.css";

export default class ErrorDetails extends Component {
  render() {
    return (
      <div className="error-details">
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
