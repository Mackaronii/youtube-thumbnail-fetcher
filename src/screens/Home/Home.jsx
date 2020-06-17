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

    this.onVideoInfoFetched = this.onVideoInfoFetched.bind(this);
    this.extractVideoInfo = this.extractVideoInfo.bind(this);
  }

  onVideoInfoFetched(info) {
    this.extractVideoInfo(info);
  }

  extractVideoInfo(info) {
    console.log(info);
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
      <Container>
        <h1>Youtube Thumbnail Fetcher</h1>
        <p>Download or view Youtube thumbnails in various resolutions.</p>
        <ThumbnailForm onVideoInfoFetched={this.onVideoInfoFetched} />
        {thumbnailDetails}
      </Container>
    );
  }
}
