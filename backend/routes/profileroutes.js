const express = require("express");

const router = express.Router();

const profileController = require("../controller/profilecontroller");

router.get("/", profileController.getProfile);

router.put("/", profileController.updateProfile);

module.exports = router;