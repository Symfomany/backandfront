import React, { Component } from "react";
import "./Meetup.css";
import { Link } from "react-router-dom";

class Meetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let className = "card col-4 ";
    if (this.props.meetup.cover) {
      className += "text-white bg-warning mb-3";
    }
    return (
      <div className={className}>
        <img
          className="card-img-top img-fluid"
          src={this.props.meetup.url}
          alt="Card image cap"
          style={{ maxHeight: "179px" }}
        />
        <div className="card-body">
          <small className="float-right">
            <i className="fa fa-calendar-alt" /> {this.props.meetup.date_begin}
          </small>
          <h4 className="card-title">
            <br />
            {this.props.meetup.title}
          </h4>
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
