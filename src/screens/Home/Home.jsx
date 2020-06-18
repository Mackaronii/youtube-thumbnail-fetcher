import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import MyTypical from "../../components/MyTypical/MyTypical";
import ThumbnailForm from "../../components/ThumbnailForm/ThumbnailForm";
import ThumbnailDetails from "../../components/ThumbnailDetails/ThumbnailDetails";
import ErrorDetails from "../../components/ErrorDetails/ErrorDetails";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    // Initialize a constant MyTypical component
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

    this.TYPICAL = <MyTypical steps={TYPICAL_STEPS} />;

    this.state = {
      thumbnailDetails: undefined,
      errorDetails: undefined,
      showTypical: true,
      showThumbnailDetails: false,
      showErrorDetails: false,
    };

    this.onBadUserInput = this.onBadUserInput.bind(this);
    this.onVideoNotFound = this.onVideoNotFound.bind(this);
    this.onVideoInfoFetched = this.onVideoInfoFetched.bind(this);
    this.showThumbnailDetails = this.showThumbnailDetails.bind(this);
    this.showErrorDetails = this.showErrorDetails.bind(this);
  }

  onBadUserInput() {
    console.error("Failed to parse URL");

    // Set up an ErrorDetails component
    const ERROR_DETAILS = (
      <ErrorDetails
        title="Failed to Parse URL"
        body="The URL must match the search bar hint."
      />
    );

    this.showErrorDetails(ERROR_DETAILS);
  }

  onVideoNotFound() {
    console.error("Video not found");

    // Set up an ErrorDetails component
    const ERROR_DETAILS = (
      <ErrorDetails
        title="Video Not Found"
        body="The provided URL does not go to a valid YouTube video."
      />
    );

    this.showErrorDetails(ERROR_DETAILS);
  }

  onVideoInfoFetched(responseJson) {
    if (responseJson.items.length === 0) {
      // The JSON response indicates that no video was found
      this.onVideoNotFound();
    } else {
      // The JSON response is good
      const VIDEO_INFO = responseJson.items[0].snippet;
      const THUMBNAIL_DETAILS = <ThumbnailDetails videoInfo={VIDEO_INFO} />;
      this.showThumbnailDetails(THUMBNAIL_DETAILS);
    }
  }

  showThumbnailDetails(thumbnailDetails) {
    // Show ThumbnailDetails and hide ErrorDetails
    this.setState({
      thumbnailDetails: thumbnailDetails,
      errorDetails: undefined,
      showTypical: false,
      showThumbnailDetails: true,
      showErrorDetails: false,
    });
  }

  showErrorDetails(errorDetails) {
    // Show ErrorDetails and hide ThumbnailDetails
    this.setState({
      thumbnailDetails: undefined,
      errorDetails: errorDetails,
      showTypical: true,
      showThumbnailDetails: false,
      showErrorDetails: true,
    });
  }

  render() {
    return (
      <div>
        <Container className="home-container">
          <h1>YouTube Thumbnail Fetcher</h1>
          {this.state.showTypical && this.TYPICAL}
          <ThumbnailForm
            onBadUserInput={this.onBadUserInput}
            onVideoInfoFetched={this.onVideoInfoFetched}
          />
          {this.state.showThumbnailDetails && this.state.thumbnailDetails}
          {this.state.showErrorDetails && this.state.errorDetails}
        </Container>
      </div>
    );
  }
}
