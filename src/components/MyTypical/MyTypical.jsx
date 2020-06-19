import React, { Component } from "react";
import Typical from "react-typical";

export default class MyTypical extends Component {
  render() {
    const TYPICAL_STEPS = [
      "View thumbnails in various resolutions.",
      3000,
      "Enter a YouTube video URL below to get started!",
      3000,
      "Visit my GitHub to see more of my projects @Mackaronii.",
      3000,
    ];

    return <Typical steps={TYPICAL_STEPS} loop={Infinity} wrapper="p" />;
  }
}
