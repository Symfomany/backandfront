const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ApiController = require("../controllers/ApiController");
const controller = new ApiController();

router.get("/", (req, res) => controller.index(req, res));
router.get("/liste", (req, res) => controller.liste(req, res));
router.post("/create", (req, res) => controller.create(req, res));

module.exports = router;
