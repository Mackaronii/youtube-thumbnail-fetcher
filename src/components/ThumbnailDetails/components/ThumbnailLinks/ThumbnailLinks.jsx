import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./ThumbnailLinks.css";

export default class ThumbnailLinks extends Component {
  render() {
    const thumbnails = this.props.thumbnails;

    // Extract thumbnails
    const THUMBNAIL_DEFAULT = thumbnails.default;
    const THUMBNAIL_MEDIUM = thumbnails.medium;
    const THUMBNAIL_HIGH = thumbnails.high;
    const THUMBNAIL_STANDARD = thumbnails.standard;
    const THUMBNAIL_MAXRES = thumbnails.maxres;

    // Prepare array for mapping to Buttons
    const thumbnailArray = [
      THUMBNAIL_DEFAULT,
      THUMBNAIL_MEDIUM,
      THUMBNAIL_HIGH,
      THUMBNAIL_STANDARD,
      THUMBNAIL_MAXRES,
    ];

    // Create link buttons
    const LINK_BUTTONS = thumbnailArray.map(function (item, i) {
      const BUTTON_LABEL = `${item.width}x${item.height}`;
      return (
        <Button key={i} variant="light" href={item.url} target="_blank">
          {BUTTON_LABEL}
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
