const Task = require("../models/Task");


// CREATE TASK
exports.createTask = async (req, res) => {

  try {

    console.log(req.body);

    const {
      title,
      description,
      project,
      assignedTo,
      dueDate,
    } = req.body;

    if (!title || !project) {

      return res.status(400).json({
        message: "Title and Project are required",
      });
    }

    const task = await Task.create({
      title,
      description,
      project,

      assignedTo: assignedTo || req.user.id,

      dueDate,

      createdBy: req.user.id,
    });

    res.status(201).json(task);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// GET TASKS
exports.getTasks = async (req, res) => {

  try {

    console.log(req.user);

    let tasks;

    if (req.user.role === "admin") {

      tasks = await Task.find()
        .populate("project", "title");

    } else {

      tasks = await Task.find({

        $or: [

          { assignedTo: req.user.id },

          { createdBy: req.user.id }

        ]

      }).populate("project", "title");
    }

    console.log(tasks);

    res.json(tasks);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE TASK STATUS
exports.updateTaskStatus = async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    if (!task) {

      return res.status(404).json({
        message: "Task not found",
      });
    }

    if (
      task.assignedTo &&
      task.assignedTo.toString() !== req.user.id
    ) {

      return res.status(403).json({
        message: "Not authorized",
      });
    }

    task.status = req.body.status;

    await task.save();

    res.json(task);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};