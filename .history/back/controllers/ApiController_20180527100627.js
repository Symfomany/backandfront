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
      res.json(true);
    });
  }

  remove(req, res) {
    db.Meetups
      .find({ id: req.params.id })
      .then(meetup => {
        // now you see me...
        meetup.destroy().then(e => res.json(true));
      })
      .then(() => {
        // now i'm gone :)
      });
  }
}

module.exports = ApiController;
