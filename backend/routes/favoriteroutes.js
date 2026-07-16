const express = require("express");

const router = express.Router();

const favoriteController = require("../controller/favoritecontroller");

router.get("/", favoriteController.getFavorites);

router.put("/:id", favoriteController.addFavorite);

router.delete("/:id", favoriteController.removeFavorite);

module.exports = router;