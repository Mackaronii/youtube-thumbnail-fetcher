import React, { Component } from "react";
import "./ThumbnailDetails.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import DownloadVidePanel from "./components/DownloadViewPanel/DownloadViewPanel";

export default class ThumbnailDetails extends Component {
  render() {
    // Extract video info
    const TITLE = this.props.videoInfo.title;
    const CHANNEL = this.props.videoInfo.channelTitle;

    // Convert publish date to Date object and then format to UTC string
    const PUBLISH_DATE = new Date(
      this.props.videoInfo.publishedAt
    ).toUTCString();

    // Get max res image
    const thumbnails = this.props.videoInfo.thumbnails;
    const THUMBNAIL_MAXRES = thumbnails.maxres;

    return (
      <Container className="thumbnail-details-container">
        <Row>
          <Col>
            <Image src={THUMBNAIL_MAXRES.url} fluid />
          </Col>
          <Col>
            <VideoInfo title="Video Title" body={TITLE} />
            <VideoInfo title="Channel Name" body={CHANNEL} />
            <VideoInfo title="Publish Date" body={PUBLISH_DATE} />
          </Col>
        </Row>
        <DownloadVidePanel thumbnails={thumbnails} />
      </Container>
    );
  }
}
