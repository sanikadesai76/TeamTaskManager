import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";

import "../styles/Tasks.css";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [projects, setProjects] = useState([]);

  const [users, setUsers] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [project, setProject] = useState("");

  const [assignedTo, setAssignedTo] = useState("");

  const [dueDate, setDueDate] = useState("");




  useEffect(() => {

    fetchTasks();

    fetchProjects();

    fetchUsers();

  }, []);




  const fetchTasks = async () => {

    try {

      const { data } = await API.get("/tasks");

      setTasks(data);

    } catch (error) {

      console.log(error);

    }
  };




  const fetchProjects = async () => {

    try {

      const { data } = await API.get("/projects");

      setProjects(data);

    } catch (error) {

      console.log(error);

    }
  };




  const fetchUsers = async () => {

    try {

      const { data } = await API.get("/users");

      setUsers(data);

    } catch (error) {

      console.log(error);

    }
  };




  const handleCreateTask = async (e) => {

    e.preventDefault();

    if (!title || !project) {

      alert("Please fill required fields");

      return;
    }

    try {

      await API.post("/tasks", {
        title,
        description,
        project,
        assignedTo,
        dueDate,
      });

      setTitle("");

      setDescription("");

      setProject("");

      setAssignedTo("");

      setDueDate("");

      fetchTasks();

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };




  const updateTaskStatus = async (
    id,
    status
  ) => {

    try {

      await API.put(`/tasks/${id}`, {
        status,
      });

      fetchTasks();

    } catch (error) {

      console.log(error);

    }
  };




  return (

    <div className="tasks-page">

      <Navbar />



      <div className="tasks-container">

        <h1 className="tasks-title">
          Task Management
        </h1>





        <form
          className="task-form"
          onSubmit={handleCreateTask}
        >

          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />




          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />




          <select
            value={project}
            onChange={(e) =>
              setProject(e.target.value)
            }
          >

            <option value="">
              Select Project
            </option>

            {

              projects.map((project) => (

                <option
                  key={project._id}
                  value={project._id}
                >
                  {project.title}
                </option>
              ))
            }

          </select>





          <select
            value={assignedTo}
            onChange={(e) =>
              setAssignedTo(e.target.value)
            }
          >

            <option value="">
              Assign User
            </option>

            {

              users.map((user) => (

                <option
                  key={user._id}
                  value={user._id}
                >
                  {user.name} ({user.role})
                </option>
              ))
            }

          </select>





          <input
            type="date"
            value={dueDate}
            onChange={(e) =>
              setDueDate(e.target.value)
            }
          />





          <button type="submit">
            Create Task
          </button>

        </form>





        <div className="task-grid">

          {

            tasks.map((task) => (

              <div
                className="task-card"
                key={task._id}
              >

                <div className="task-header">

                  <h3>{task.title}</h3>

                  <span className="project-tag">
                    {task.project?.title || "No Project"}
                  </span>

                </div>





                <p>{task.description}</p>





                <div className="task-info">

                  <p>
                    <strong>Assigned To:</strong>
                    {" "}
                    {
                      task.assignedTo?.name ||
                      "Unassigned"
                    }
                  </p>

                  <p>
                    <strong>Due:</strong>
                    {" "}
                    {
                      task.dueDate
                        ? new Date(task.dueDate)
                            .toLocaleDateString()
                        : "No Due Date"
                    }
                  </p>

                </div>





                <select
                  className={`status-dropdown ${task.status.toLowerCase()}`}

                  value={task.status}

                  onChange={(e) =>
                    updateTaskStatus(
                      task._id,
                      e.target.value
                    )
                  }
                >

                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Completed">
                    Completed
                  </option>

                </select>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Tasks;