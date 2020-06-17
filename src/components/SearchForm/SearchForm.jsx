import React, { Component } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./SearchForm.css";

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <InputGroup size="lg">
            <FormControl
              onChange={this.onChange}
              placeholder={this.props.placeholderText}
            />
          </InputGroup>

          <Button variant="outline-light" size="lg" type="submit">
            {this.props.buttonText}
          </Button>
        </form>
      </div>
    );
  }
}
