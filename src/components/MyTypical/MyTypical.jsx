import React, { Component } from "react";
import Typical from "react-typical";

export default class MyTypical extends Component {
  render() {
    const TYPICAL_STEPS = [
      "View thumbnails in various resolutions.",
      3000,
      "Available resolutions include: Default (120x90)",
      1000,
      "Available resolutions include: Medium (320x180)",
      1000,
      "Available resolutions include: High (480x360)",
      1000,
      "Available resolutions include: Standard (640x480)",
      1000,
      "Available resolutions include: Maximum (1280x720)",
      2000,
      "Enter a YouTube video URL below to get started!",
      3000,
    ];

    return <Typical steps={TYPICAL_STEPS} loop={Infinity} wrapper="p" />;
  }
}
