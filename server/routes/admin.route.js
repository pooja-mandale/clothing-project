const express = require("express");
const router = express.Router();
const authController = require("../controllers/admin.controller");

// Admin REGISTER
router.post("/register-admin", authController.registerAdmin);

// Admin LOGIN
router.post("/login-admin", authController.loginAdmin);

// Admin LOGOUT
router.post("/logout", authController.logoutAdmin);

module.exports = router;
