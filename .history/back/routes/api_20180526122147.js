const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ApiController = require("../controllers/ApiController");
const controller = new ApiController();

router.get("/", (req, res) => controller.index(req, res));

module.exports = router;
