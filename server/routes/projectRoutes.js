const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorize = require("../middleware/roleMiddleware");

const {
  createProject,
  getProjects
} = require("../controllers/projectController");

router.post(
  "/",
  protect,
  authorize("admin", "member"),
  createProject
);

router.get(
  "/",
  protect,
  getProjects
);

module.exports = router;