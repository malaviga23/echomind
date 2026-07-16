const express = require("express");
const router = express.Router();

const memoryController = require("../controller/memorycontroller");

router.get("/", memoryController.getAllMemories);

router.get("/search", memoryController.searchMemory);

router.delete("/:id", memoryController.deleteMemory);

module.exports = router;