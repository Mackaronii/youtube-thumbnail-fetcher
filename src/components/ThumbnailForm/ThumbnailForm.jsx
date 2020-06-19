import SearchForm from "../../components/SearchForm/SearchForm";
import React, { Component } from "react";

export default class ThumbnailSearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };

    this.parseUserInput = this.parseUserInput.bind(this);
    this.getVideoInfo = this.getVideoInfo.bind(this);
  }

  parseUserInput(url) {
    if (url.includes("youtube.com/watch?v=")) {
      // Parse user input for desktop URLs
      const ID = url.split("youtube.com/watch?v=")[1].split("&")[0];
      this.getVideoInfo(ID);
    } else if (url.includes("youtu.be/")) {
      // Parse user input for mobile URLs
      const ID = url.split("youtu.be/")[1];
      this.getVideoInfo(ID);
    } else {
      // Failed to parse user input
      this.props.onBadUserInput();
    }
  }

  getVideoInfo(id) {
    const BASE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = "AIzaSyDHXwLACnzxWVGqZgiBY9RBvNH5QB_NIHA";
    const VIDEO_URL = `${BASE_URL}/videos?key=${API_KEY}&part=snippet&id=${id}`;

    // Disable Get Thumbnails button
    this.setState({ isLoading: true }, () => {
      // Fetch video information
      fetch(VIDEO_URL)
        .then((response) => response.json())
        .then((json) => this.props.onVideoInfoFetched(json))
        .then(() => this.setState({ isLoading: false }));
    });
  }

  render() {
    return (
      <SearchForm
        placeholderText="Enter a YouTube video URL"
        buttonText="Get Thumbnails"
        isLoading={this.state.isLoading}
        onSubmit={this.parseUserInput}
      />
    );
  }
}
