import React, { Component } from "react";

class Liste extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        {this.props.meetups.map(meetup => (
          <div key={meetup.id}>
            <h4>{meetup.title}</h4>
            <p>{meetup.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Liste;
