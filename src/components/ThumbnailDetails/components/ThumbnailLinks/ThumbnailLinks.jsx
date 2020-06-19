import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./ThumbnailLinks.css";

export default class ThumbnailLinks extends Component {
  render() {
    const thumbnails = this.props.thumbnails;
    const thumbnailKeys = Object.keys(this.props.thumbnails);

    // Put thumbnails in an array
    let thumbnailArray = [];
    thumbnailKeys.forEach(function (key) {
      thumbnailArray.push(thumbnails[key]);
    });

    // Create link buttons
    const LINK_BUTTONS = thumbnailArray.map(function (item, i) {
      return (
        <Button key={i} variant="light" href={item.url} target="_blank">
          {`${item.width}x${item.height}`}
        </Button>
      );
    });

    return (
      <div className="thumbnail-links">
        <h3>Thumbnail Links</h3>
        <ButtonGroup>{LINK_BUTTONS}</ButtonGroup>
      </div>
    );
  }
}
