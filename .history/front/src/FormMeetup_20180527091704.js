import React, { Component } from "react";

class FormMeetup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add(e) {
    e.preventDefault();
  }

  handleChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <form onSubmit={this.add} onChange={this.handleChange}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control"
            id="desc"
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Confirm Meetup
        </button>
      </form>
    );
  }
}

export default FormMeetup;
