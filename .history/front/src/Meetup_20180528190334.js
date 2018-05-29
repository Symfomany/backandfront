import React, { Component } from "react";
import { Link } from "react-router-dom";

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
          <p className="card-subtitle mb-2 text-muted">
            <i className="fa fa-map" /> {this.props.meetup.lieux}
          </p>

          <p className="card-text">
            <i>{this.props.meetup.description}</i>
          </p>
          <a
            onClick={e => this.props.remove(this.props.meetup)}
            className="btn btn-warning btn-sm"
          >
            <i className="fa fa-trash" /> Supprimer
          </a>
          <Link
            to={`/update/${this.props.meetup.id}`}
            className="btn btn-info  btn-sm"
          >
            <i className="fa fa-pencil-alt" /> Compléter
          </Link>
        </div>
      </div>
    );
  }
}

export default Meetup;
