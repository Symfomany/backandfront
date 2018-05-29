import React, { Component } from "react";

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="card col-4">
        <img
          className="card-img-top img-fluid"
          src={this.props.meetup.url}
          alt="Card image cap"
          style={{ minHeight: "235px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{this.props.meetup.title}</h4>
          <p className="card-text">{this.props.meetup.description}</p>
          <a
            onClick={e => this.props.remove(this.props.meetup)}
            className="btn btn-warning"
          >
            Supprimer ce Meetup
          </a>
        </div>
      </div>
    );
  }
}

export default Meetup;
