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
    db.Meetups.create(req.body).then(response => {
      res.json(true);
    });

    Task.create({ title: "a task" })
      .then(task => {
        // now you see me...
        return task.destroy();
      })
      .then(() => {
        // now i'm gone :)
      });
  }
}

module.exports = ApiController;
