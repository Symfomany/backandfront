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
            <i className="fa fa-MAP" /> {this.props.meetup.lieux}
          </p>

          <p className="card-text">{this.props.meetup.description}</p>
          <a
            onClick={e => this.props.remove(this.props.meetup)}
            className="btn btn-warning"
          >
            <i className="fa fa-trash" /> Supprimer ce Meetup
          </a>
          <Link to={`/update/${this.props.meetup.id}`} className="btn btn-info">
            <i className="fa fa-pencil-alt" /> Modifier ce Meetup
          </Link>
        </div>
      </div>
    );
  }
}

export default Meetup;
