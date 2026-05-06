const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const authorize = require("../middleware/roleMiddleware");

const {
  createTask,
  getTasks,
  updateTaskStatus,
} = require("../controllers/taskController");


// ADMIN ONLY
router.post(
  "/",
  protect,
  authorize("admin", "member"),
  createTask
);


// LOGGED-IN USERS
router.get(
  "/",
  protect,
  getTasks
);


// MEMBER ONLY
router.put(
  "/:id",
  protect,
  authorize("member"),
  updateTaskStatus
);

module.exports = router;