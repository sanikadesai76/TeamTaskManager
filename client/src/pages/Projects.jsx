import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import API from "../services/api";

import "../styles/Projects.css";

function Projects() {

  const [projects, setProjects] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");



  useEffect(() => {

    fetchProjects();

  }, []);



  const fetchProjects = async () => {

    try {

      const { data } = await API.get("/projects");

      setProjects(data);

    } catch (error) {

      console.log(error);

    }
  };



  const handleCreateProject = async (e) => {

    e.preventDefault();

    try {

      await API.post("/projects", {
        title,
        description,
      });

      setTitle("");
      setDescription("");

      fetchProjects();

    } catch (error) {

      console.log(error);

    }
  };



  return (

    <div className="projects-page">

      <Navbar />



      <div className="projects-container">

        <h1 className="projects-title">
          Projects
        </h1>



        <form
          className="project-form"
          onSubmit={handleCreateProject}
        >

          <input
            type="text"
            placeholder="Project Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />



          <textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />



          <button type="submit">
            Create Project
          </button>

        </form>



        {

          projects.map((project) => (

            <div
              className="project-card"
              key={project._id}
            >

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>
          ))
        }

      </div>

    </div>
  );
}

export default Projects;