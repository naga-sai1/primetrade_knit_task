const express = require("express");
const router = express.Router();
const { register, login, getProfile } = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");
const { validateRegistration, validateLogin, validate } = require("../middleware/validation");
const { authLimiter } = require("../middleware/rateLimiter");

// ✅ Base path: /v1/auth

// @route   POST /v1/auth/register
// @desc    Register a new user (default role = user)
// @access  Public
router.post("/register", authLimiter, validateRegistration, validate, register);

// @route   POST /v1/auth/login
// @desc    Login existing user and return JWT token
// @access  Public
router.post("/login", authLimiter, validateLogin, validate, login);

// @route   GET /v1/auth/profile
// @desc    Get logged-in user's details (Protected)
// @access  Private
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
