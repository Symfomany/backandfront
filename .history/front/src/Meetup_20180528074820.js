import React, { Component } from "react";

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src="this.props.meetup.url"
          alt="Card image cap"
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.meetup.title}</h4>
          <p className="card-text">{this.props.meetup.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export default Meetup;
