import React, { Component } from "react";
import Image from "react-bootstrap/Image";

export default class ThumbnailDetails extends Component {
  render() {
    // Extract video info
    const TITLE = this.props.videoInfo.title;
    const CHANNEL = this.props.videoInfo.channelTitle;
    const DESCRIPTION = this.props.videoInfo.description;
    const PUBLISH_DATE = this.props.videoInfo.publishedAt;

    const thumbnails = this.props.videoInfo.thumbnails;
    const THUMBNAIL_DEFAULT = thumbnails.default;
    const THUMBNAIL_MEDIUM = thumbnails.medium;
    const THUMBNAIL_HIGH = thumbnails.high;
    const THUMBNAIL_STANDARD = thumbnails.standard;
    const THUMBNAIL_MAXRES = thumbnails.maxres;

    return (
      <div>
        <Image src={THUMBNAIL_MAXRES.url} style={{ width: "50%" }} fluid />
        <h2>{TITLE}</h2>
        <h3>By {CHANNEL}</h3>
      </div>
    );
  }
}
