import React, { Component } from "react";
import ajax from "./config";

class FormMeetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      url: "",
      cover: false,
      modalite: "gratuit"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.reset.bind(this);
  }

  /**
   * Fetch api
   */
  componentDidMount() {
    // Si dans les paramètres de l'URI, j'ai un ID = update
    // Alors on charge le Meetup
    if (this.props.match.params.id) {
      ajax.get(`/show/${this.props.match.params.id}`).then(
        res => this.setState(res.data)
        //console.log(res.data)
      );
    }
  }

  /**
   * Handle Submit Form
   */
  handleSubmit(e) {
    e.preventDefault();

    // Si nous sommes dans le cas d'update un Meetup (id dans l'URI)
    if (this.props.match.params.id) {
      ajax
        .post(`/update/${this.props.match.params.id}`, this.state)
        .then(response => {
          this.props.refresh(response.data);
          this.props.history.push("/");
        })
        .catch(e => alert("Erreur, veuillez réessayer plus tard"));
    } else {
      // Sinon, c'est que nous sommes dans le new
      ajax
        .post("/create", this.state)
        .then(response => {
          this.props.refresh(response.data);
          this.props.history.push("/");
        })
        .catch(e => alert("Erreur, veuillez réessayer plus tard"));
    }
  }

  /**
   * Gestion du Formulaire
   */
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  redirect() {
    this.props.history.push("/");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
        <button
          type="button"
          onClick={this.redirect}
          className="btn btn-warning"
        >
          Retour à la liste
        </button>

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            placeholder="Enter title"
            value={this.state.title}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="gratuit">
            <input
              checked={this.state.modalite === "gratuit"}
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
              checked={this.state.modalite === "payant"}
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
            value={this.state.url}
          />
        </div>
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <textarea
            className="form-control"
            id="desc"
            name="description"
            placeholder="Enter description"
            value={this.state.description}
          />
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              name="cover"
              type="checkbox"
              defaultChecked={this.state.cover === true}
            />{" "}
            Mise en page d'accueil
          </label>
        </div>
        <hr />
        <button type="submit" className="btn btn-primary">
          Confirm Meetup
        </button>
      </form>
    );
  }
}

export default FormMeetup;
