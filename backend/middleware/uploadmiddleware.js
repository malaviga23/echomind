const multer = require("multer");
const path = require("path");

// Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName);
  }
});

// Allowed File Types
const fileFilter = (req, file, cb) => {
  const allowedTypes = /pdf|doc|docx|ppt|pptx|jpg|jpeg|png|mp4|txt/;

  const ext = path.extname(file.originalname).toLowerCase();

  if (allowedTypes.test(ext)) {
    cb(null, true);
  } else {
    cb(new Error("Only PDF, DOC, PPT, Images, Videos and TXT files are allowed"));
  }
};

const upload = multer({
  storage,
  fileFilter
});

module.exports = upload;