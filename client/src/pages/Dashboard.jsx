import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";

import "../styles/Dashboard.css";

function Dashboard() {

  const [tasks, setTasks] = useState([]);




  useEffect(() => {

    fetchTasks();

  }, []);




  const fetchTasks = async () => {

    try {

      const { data } = await API.get("/tasks");

      setTasks(data);

    } catch (error) {

      console.log(error);

    }
  };




  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;



  const overdueTasks = tasks.filter(

    (task) =>

      task.dueDate &&

      new Date(task.dueDate) < new Date() &&

      task.status !== "Completed"

  );




  return (

    <div className="dashboard">

      <Navbar />



      <div className="dashboard-content">

        <h1 className="dashboard-title">
          Dashboard
        </h1>




        <div className="stats-grid">

          <div className="stat-card">

            <h2>Total Tasks</h2>

            <p>{totalTasks}</p>

          </div>




          <div className="stat-card">

            <h2>Completed</h2>

            <p>{completedTasks}</p>

          </div>




          <div className="stat-card">

            <h2>Pending</h2>

            <p>{pendingTasks}</p>

          </div>




          <div className="stat-card">

            <h2>In Progress</h2>

            <p>{inProgressTasks}</p>

          </div>




          <div className="stat-card overdue-card">

            <h2>Overdue</h2>

            <p>{overdueTasks.length}</p>

          </div>

        </div>





        <div className="recent-tasks">

          <h2>Recent Tasks</h2>

          {

            tasks.slice(0, 5).map((task) => (

              <div
                className="recent-task-card"
                key={task._id}
              >

                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <span>{task.status}</span>

              </div>
            ))
          }

        </div>





        <div className="overdue-section">

          <h2>Overdue Tasks</h2>

          {

            overdueTasks.length === 0 ? (

              <p className="empty-text">
                No overdue tasks
              </p>

            ) : (

              overdueTasks.map((task) => (

                <div
                  className="overdue-task-card"
                  key={task._id}
                >

                  <h3>{task.title}</h3>

                  <p>{task.description}</p>

                  <span>
                    Due:
                    {" "}
                    {
                      new Date(task.dueDate)
                        .toLocaleDateString()
                    }
                  </span>

                </div>
              ))
            )
          }

        </div>

      </div>

    </div>
  );
}

export default Dashboard;