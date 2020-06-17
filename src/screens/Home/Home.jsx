import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import ThumbnailForm from "../../components/ThumbnailForm/ThumbnailForm";
import ThumbnailDetails from "../../components/ThumbnailDetails/ThumbnailDetails";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoInfoLoaded: false,
      videoInfo: undefined,
    };

    this.onBadUserInput = this.onBadUserInput.bind(this);
    this.onVideoInfoFetched = this.onVideoInfoFetched.bind(this);
    this.loadVideoInfo = this.loadVideoInfo.bind(this);
  }

  onBadUserInput() {
    console.log("Failed to parse the URL");
  }

  onVideoInfoFetched(info) {
    this.loadVideoInfo(info);
  }

  loadVideoInfo(info) {
    this.setState({
      videoInfoLoaded: true,
      videoInfo: info,
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
            onVideoInfoFetched={this.onVideoInfoFetched}
            onBadUserInput={this.onBadUserInput}
          />
          {thumbnailDetails}
        </Container>
      </div>
    );
  }
}
