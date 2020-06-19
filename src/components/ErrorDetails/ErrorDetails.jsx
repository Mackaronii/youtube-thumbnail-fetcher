import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./ErrorDetails.css";

export default class ErrorDetails extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -50 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 500 }}
      >
        {(props) => (
          <div style={props}>
            <div className="error-details">
              <h3>{this.props.title}</h3>
              <p>{this.props.body}</p>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
