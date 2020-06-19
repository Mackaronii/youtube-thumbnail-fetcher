import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import "./ThumbnailDetails.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import VideoInfo from "./components/VideoInfo/VideoInfo";
import ThumbnailLinks from "./components/ThumbnailLinks/ThumbnailLinks";

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
          <Col xs={12} md={6}>
            <Spring
              from={{ opacity: 0, marginTop: 50 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <Image src={THUMBNAIL_MAXRES.url} thumbnail fluid />
                </div>
              )}
            </Spring>
          </Col>
          <Col xs={12} md={6}>
            <Spring
              from={{ opacity: 0, marginTop: -50 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1000, duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <VideoInfo title="Video Title" body={TITLE} />
                </div>
              )}
            </Spring>

            <Spring
              from={{ opacity: 0, marginTop: -50 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 1500, duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <VideoInfo title="Channel Name" body={CHANNEL} />
                </div>
              )}
            </Spring>

            <Spring
              from={{ opacity: 0, marginTop: -50 }}
              to={{ opacity: 1, marginTop: 0 }}
              config={{ delay: 2000, duration: 1000 }}
            >
              {(props) => (
                <div style={props}>
                  <VideoInfo title="Publish Date" body={PUBLISH_DATE} />
                </div>
              )}
            </Spring>
          </Col>
        </Row>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 3000, duration: 1000 }}
        >
          {(props) => (
            <div style={props}>
              <ThumbnailLinks thumbnails={thumbnails} />
            </div>
          )}
        </Spring>
      </Container>
    );
  }
}
