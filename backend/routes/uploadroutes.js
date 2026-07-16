const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadmiddleware");
const uploadController = require("../controller/uploadController");

router.post(
    "/",
    upload.single("file"),
    uploadController.uploadFile
);

module.exports = router;