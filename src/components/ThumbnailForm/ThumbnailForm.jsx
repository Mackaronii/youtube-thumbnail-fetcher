import SearchForm from "../../components/SearchForm/SearchForm";
import React, { Component } from "react";

export default class ThumbnailSearchBar extends Component {
  constructor(props) {
    super(props);
    this.getVideoInfo = this.getVideoInfo.bind(this);
  }

  getVideoInfo(url) {
    console.log(`Getting thumbnails from the following URL: ${url}`);
    const BASE_URL = "https://www.googleapis.com/youtube/v3";
    const API_KEY = "AIzaSyDHXwLACnzxWVGqZgiBY9RBvNH5QB_NIHA";

    try {
      // Parse user input
      const ID = url.split("watch?v=")[1].split("&")[0];

      // Get video information
      fetch(`${BASE_URL}/videos?key=${API_KEY}&part=snippet&id=${ID}`)
        .then(function (response) {
          if (response.status !== 200) {
            console.log("Something went wrong!");
          } else {
            return response.json();
          }
        })
        .then((json) => this.props.onVideoInfoFetched(json.items[0].snippet));
    } catch (error) {
      // Failed to parse user input
      console.error(error.message);
    }
  }

  render() {
    return (
      <SearchForm
        placeholderText="Enter Youtube video URL"
        buttonText="Get Thumbnails"
        onSubmit={this.getVideoInfo}
      />
    );
  }
}
