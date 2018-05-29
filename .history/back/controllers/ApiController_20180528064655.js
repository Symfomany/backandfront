const db = require(`../models/index.js`);
/**
 * Class Api Controller
 */
class ApiController {
  /**
     * Demo 
     */
  index(req, res) {
    const demo = {
      username: "Symfomany",
      adresse: {
        school: "WildCodeSchool",
        city: "Lyon",
        cp: 69003
      },
      languages: ["PHP", "JS", "JAVA", "Swift", "Haskell"]
    };

    res.json(demo);
  }
  /**
   * Listing of Meetup
   */
  liste(req, res) {
    db.Meetups.findAll().then(response => {
      res.json(response);
    });
  }
  /**
   * Create of Meetup
   */
  create(req, res) {
    db.Meetups.create(req.body).then(response => {
      db.Meetups.findAll().then(meetups => res.json(meetups));
    });
  }
  /**
   * Update of Meetup
   */
  update(req, res) {
    db.Meetups.findById(req.params.id).then(meetup => {
      meetup.update(req.body).then(response => {
        db.Meetups.findAll().then(meetups => res.json(meetups));
      });
    });
  }
  /**
   * Remove of Meetup
   */
  remove(req, res) {
    db.Meetups.findById(req.params.id).then(meetup => {
      meetup
        .destroy()
        .then(e => db.Meetups.findAll().then(meetups => res.json(meetups)));
    });
  }
  /**
   * Remove of Meetup
   */
  show(req, res) {
    db.Meetups.findById(req.params.id).then(meetup => {
      res.json(meetup);
    });
  }
}

module.exports = ApiController;
