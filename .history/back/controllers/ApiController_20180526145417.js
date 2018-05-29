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

  list(req, res) {
    db.Meetups.findAll().then(response => {
      res.json(response);
    });
  }
}

module.exports = ApiController;
