import React, { Component } from "react";
import ajax from "./config";

class FormMeetup extends Component {
  constructor(props) {
    super(props);

    if (this.props.location.update) {
      this.state = this.props.location.state.meetup;
    } else {
      this.state = {
        title: "",
        description: "",
        url: "",
        cover: false,
        modalite: "gratuit"
      };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
  }

  /**
   * Fetch api
   */
  componentDidMount() {
    ajax
      .get(`/show/${this.props.match.id}`)
      .then(res => this.setState({ meetup: res.data }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.location.update) {
      ajax
        .post(`/update/${this.props.location.state.meetup.id}`, this.state)
        .then(response => {
          this.props.refresh(response.data);
          this.props.history.push("/");
        })
        .catch(e => alert("Erreur, veuillez réessayer plus tard"));
    } else {
      ajax
        .post("/create", this.state)
        .then(response => {
          this.props.refresh(response.data);
          this.props.history.push("/");
        })
        .catch(e => alert("Erreur, veuillez réessayer plus tard"));
    }
  }

  handleChange(e) {
    let change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }

  reset() {
    this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Enter title"
            defaultValue={this.state.title}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="gratuit">
            <input
              defaultChecked={this.state.modalite === "gratuit"}
              className="form-check-input"
              type="radio"
              name="modalite"
              id="gratuit"
              value="gratuit"
            />
            Gratuit
          </label>
          <br />
          <label className="form-check-label" htmlFor="payant">
            <input
              defaultChecked={this.state.modalite === "payant"}
              className="form-check-input"
              type="radio"
              name="modalite"
              id="payant"
              value="payant"
            />
            Payant
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="title">URL</label>
          <input
            type="url"
            className="form-control"
            name="url"
            id="url"
            placeholder="http://"
            defaultValue={this.state.url}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control"
            id="desc"
            name="description"
            placeholder="Enter description"
            defaultValue={this.state.description}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              name="cover"
              type="checkbox"
              defaultChecked={this.state.cover}
            />{" "}
            Mise en page d'accueil
          </label>
        </div>
        <hr />
        <button type="submit" className="btn btn-primary">
          Confirm Meetup
        </button>
        <button type="button" onClick={this.reset} className="btn btn-warning">
          Retour à la liste
        </button>
      </form>
    );
  }
}

export default FormMeetup;
