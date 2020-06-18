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
      videoInfoLoaded: false,
      videoInfo: undefined,
      showErrorDetails: false,
      errorDetails: undefined,
    };

    this.onBadUserInput = this.onBadUserInput.bind(this);
    this.onVideoNotFound = this.onVideoNotFound.bind(this);
    this.showErrorDetails = this.showErrorDetails.bind(this);
    this.onVideoInfoFetched = this.onVideoInfoFetched.bind(this);
    this.loadVideoInfo = this.loadVideoInfo.bind(this);
  }

  onBadUserInput() {
    console.log("Failed to parse URL");

    // Set up an ErrorDetails component
    const ERROR_DETAILS = (
      <ErrorDetails
        title="Failed to Parse URL"
        body="The URL must match the format shown above."
      />
    );

    this.showErrorDetails(ERROR_DETAILS);
  }

  onVideoNotFound() {
    console.log("Video not found");

    // Set up an ErrorDetails component
    const ERROR_DETAILS = (
      <ErrorDetails
        title="Video Not Found"
        body="The provided URL does not go to a valid Youtube video."
      />
    );

    this.showErrorDetails(ERROR_DETAILS);
  }

  showErrorDetails(errorDetails) {
    // Show and set ErrorDetails
    this.setState({
      videoInfoLoaded: false,
      showErrorDetails: true,
      errorDetails: errorDetails,
    });
  }

  onVideoInfoFetched(responseJson) {
    console.log("Video info fetched");

    if (responseJson.items.length === 0) {
      // The JSON response indicates that no video was found
      this.onVideoNotFound();
    } else {
      // The JSON response is good
      const VIDEO_INFO = responseJson.items[0].snippet;
      this.loadVideoInfo(VIDEO_INFO);
    }
  }

  loadVideoInfo(videoInfo) {
    // Show ThumbnailDetails and hide ErrorDetails
    this.setState({
      videoInfoLoaded: true,
      videoInfo: videoInfo,
      showErrorDetails: false,
    });
  }

  render() {
    let thumbnailDetails;
    if (this.state.videoInfoLoaded) {
      thumbnailDetails = <ThumbnailDetails videoInfo={this.state.videoInfo} />;
    } else {
      thumbnailDetails = undefined;
    }

    return (
      <div>
        <Container className="home-container">
          <h1>Youtube Thumbnail Fetcher</h1>
          <p>View Youtube thumbnails in various resolutions.</p>
          <ThumbnailForm
            onBadUserInput={this.onBadUserInput}
            onVideoNotFound={this.onVideoNotFound}
            onVideoInfoFetched={this.onVideoInfoFetched}
          />
          {thumbnailDetails}
          {this.state.showErrorDetails ? this.state.errorDetails : undefined}
        </Container>
      </div>
    );
  }
}
