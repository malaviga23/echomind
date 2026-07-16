require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/userroutes");
const uploadRoutes = require("./routes/uploadroutes");
const memoryRoutes = require("./routes/memoryroutes");
const dashboardRoutes = require("./routes/dashboardroutes");
const profileRoutes = require("./routes/profileroutes");
const favoriteRoutes = require("./routes/favoriteroutes");

const app = express();

/*
  Middleware
*/
app.use(cors());
app.use(express.json());

// Make uploads folder public
app.use("/uploads", express.static("uploads"));

/*
  Routes
*/
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/memory", memoryRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/favorites", favoriteRoutes);

/*
  Test Route
*/
app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

module.exports = app;