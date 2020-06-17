import React, { Component } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

export default class DownloadViewPanel extends Component {
  render() {
    const thumbnails = this.props.thumbnails;

    // Extract thumbnails
    const THUMBNAIL_DEFAULT = thumbnails.default;
    const THUMBNAIL_MEDIUM = thumbnails.medium;
    const THUMBNAIL_HIGH = thumbnails.high;
    const THUMBNAIL_STANDARD = thumbnails.standard;
    const THUMBNAIL_MAXRES = thumbnails.maxres;

    const thumbnailArray = [
      THUMBNAIL_DEFAULT,
      THUMBNAIL_MEDIUM,
      THUMBNAIL_HIGH,
      THUMBNAIL_STANDARD,
      THUMBNAIL_MAXRES,
    ];

    const VIDEO_WIDTH = this.props.thumbnails.width;
    const VIDEO_HEIGHT = this.props.thumbnails.height;
    const VIDEO_URL = this.props.thumbnails.url;

    return (
      <div>
        <h3>Thumbnail Links</h3>
        <ButtonGroup aria-label="Basic example">
          {thumbnailArray.map(function (item, i) {
            return (
              <Button variant="light" href={item.url} target="_blank">
                {item.width}x{item.height}
              </Button>
            );
          })}
        </ButtonGroup>
      </div>
    );
  }
}
