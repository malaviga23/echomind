const express = require("express");

const router = express.Router();

const dashboardController = require("../controller/dashboardcontroller");

router.get("/", dashboardController.getDashboard);

module.exports = router;