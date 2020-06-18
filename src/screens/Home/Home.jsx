import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ThumbnailForm from "../../components/ThumbnailForm/ThumbnailForm";
import ThumbnailDetails from "../../components/ThumbnailDetails/ThumbnailDetails";
import ErrorDetails from "../../components/ErrorDetails/ErrorDetails";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showThumbnailDetails: false,
      thumbnailDetails: undefined,
      showErrorDetails: false,
      errorDetails: undefined,
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
        body="The provided URL does not go to a valid Youtube video."
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
      showThumbnailDetails: true,
      thumbnailDetails: thumbnailDetails,
      showErrorDetails: false,
      errorDetails: undefined,
    });
  }

  showErrorDetails(errorDetails) {
    // Show ErrorDetails and hide ThumbnailDetails
    this.setState({
      showThumbnailDetails: false,
      thumbnailDetails: undefined,
      showErrorDetails: true,
      errorDetails: errorDetails,
    });
  }

  render() {
    return (
      <div>
        <Container className="home-container">
          <h1>Youtube Thumbnail Fetcher</h1>
          <p>View Youtube thumbnails in various resolutions.</p>
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
