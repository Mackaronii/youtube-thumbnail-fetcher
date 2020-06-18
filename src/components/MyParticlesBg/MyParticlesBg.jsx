import React, { Component } from "react";
import ParticlesBg from "particles-bg";

export default class MyParticlesBg extends Component {
  render() {
    // Configure the particle background with this
    const CONFIG = {
      color: "#FF0000",
      type: "cobweb",
      num: 200,
    };

    return (
      <ParticlesBg
        color={CONFIG.color}
        type={CONFIG.type}
        num={CONFIG.num}
        bg={true}
      />
    );
  }
}
