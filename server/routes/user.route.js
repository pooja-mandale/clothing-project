const express = require("express");
const router = express.Router();
const authController = require("../controllers/user.controller");

// USER REGISTER
router.post("/register", authController.registerUser);

// USER LOGIN
router.post("/login", authController.loginUser);

// USER LOGOUT
router.post("/logout", authController.logOutUser);

// FORGOT PASSWORD - SEND OTP
router.post("/forgot-password", authController.forgotPassword);

router.post("/verify-otp", authController.verifyOtp);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
