import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.meetups.map(meetup => <p>{meetup.title}</p>)}</div>;
  }
}

export default Liste;
