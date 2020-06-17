import React, { Component } from "react";
import "./VideoInfo.css";

export default class VideoInfo extends Component {
  render() {
    return (
      <div className="video-info">
        <h4>{this.props.title}</h4>
        <p>{this.props.body}</p>
      </div>
    );
  }
}
