const express = require("express");
const router = express.Router();

/**
 * Routing for Pages
 */
const ApiController = require("../controllers/ApiController");
const controller = new ApiController();

router.get("/", (req, res) => controller.index(req, res));
router.get("/liste", (req, res) => controller.liste(req, res));
router.get("/show/:id", (req, res) => controller.show(req, res));

router.post("/create", (req, res) => controller.create(req, res));
router.post("/update/:id", (req, res) => controller.update(req, res));
router.get("/remove/:id", (req, res) => controller.remove(req, res));

module.exports = router;
