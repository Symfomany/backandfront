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

  liste(req, res) {
    db.Meetups.findAll().then(response => {
      res.json(response);
    });
  }

  create(req, res) {
    db.Meetups.create(req.body).then(response => {
      db.Meetups.findAll().then(meetups => res.json(meetups));
    });
  }
  update(req, res) {
    db.Meetups.create(req.body).then(response => {
      db.Meetups.findAll().then(meetups => res.json(meetups));
    });
  }
  remove(req, res) {
    db.Meetups.findById(req.params.id).then(meetup => {
      meetup
        .destroy()
        .then(e => db.Meetups.findAll().then(meetups => res.json(meetups)));
    });
  }
}

module.exports = ApiController;
