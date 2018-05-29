import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <ul>{this.props.meetups.map(meetup => <li>{meetup.title}</li>)}</ul>;
  }
}

export default Liste;
