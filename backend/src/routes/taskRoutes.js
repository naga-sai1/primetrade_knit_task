const express = require("express");
const router = express.Router();
const { createTask, getTasks, updateTask, deleteTask } = require("../controllers/taskController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const { validateTask, validate } = require("../middleware/validation");
const { apiLimiter } = require("../middleware/rateLimiter");

// Protect all task routes
router.use(authMiddleware);

// Get all tasks (admin gets all, users get their own)
router.get("/", getTasks);

// Create a new task
router.post("/", apiLimiter, validateTask, validate, createTask);

// Update a task (owner or admin only)
router.put("/:id", apiLimiter, validateTask, validate, updateTask);

// Delete a task (owner or admin only)
router.delete("/:id", deleteTask);

module.exports = router;
