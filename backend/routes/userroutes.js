const express = require("express");

const router = express.Router();

const {
    register,
    login,
    // dashboard,
    // getUsers,
    // getAdmins,
    // getDashboard,
    // getRoles,
    // addRole
} = require("../controller/userController");

const authMiddleware =
require("../middleware/authmiddleware");

router.post("/register", register);

router.post("/login", login);

// router.get(
//     "/dashboard",
//     authMiddleware,
//     dashboard
// );
// router.get(
//  "/users",
//  authMiddleware,
//  getUsers
// );
// router.get(
//  "/admins",
//  authMiddleware,
//  getAdmins
// );
// router.get(
//  "/dashboard-count",
//  authMiddleware,
//  getDashboard
// );
// router.get(
//  "/roles",
//  authMiddleware,
//  getRoles
// );

// router.post(
//  "/roles",
//  authMiddleware,
//  addRole
// );
module.exports = router;