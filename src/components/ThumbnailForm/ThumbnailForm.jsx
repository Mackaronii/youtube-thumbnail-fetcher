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
    try {
      // Try to parse user input
      const ID = url.split("watch?v=")[1].split("&")[0];
      this.getVideoInfo(ID);
    } catch (error) {
      // Failed to parse user input
      this.props.onBadUserInput();
    }
  }

  getVideoInfo(id) {
    const BASE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = "AIzaSyDHXwLACnzxWVGqZgiBY9RBvNH5QB_NIHA";
    const VIDEO_URL = `${BASE_URL}/videos?key=${API_KEY}&part=snippet&id=${id}`;
    console.log(`Fetching thumbnails from the following URL: ${VIDEO_URL}`);

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
        placeholderText="https://www.youtube.com/watch?v={ YouTube video ID goes here }"
        buttonText="Get Thumbnails"
        isLoading={this.state.isLoading}
        onSubmit={this.parseUserInput}
      />
    );
  }
}
