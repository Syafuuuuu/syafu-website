import { Link } from "react-router-dom";
import projects from "./ProjectData.tsx";

const ProjectRepository = () => (
  <section
    id="projects"
    className="project-repository-section section container"
  >
    <h2 className="text-offwhite">Project Repository</h2>
    <div className="project-list">
      {projects.map((project) => (
        <Link
          to={`/project/${project.id}`}
          className="project-item"
          key={project.id}
        >
          <div className="project-content">
            <h5 className="text-offwhite">{project.title}</h5>
            <p>{project.description}</p>
          </div>
          <div className="project-image">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="img-fluid"
            />
          </div>
        </Link>
      ))}
    </div>
    <div className="text-center mt-4">
      <a
        href="https://github.com/yourusername?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="view-all-link"
      >
        {" "}
        View Project Repository
      </a>
    </div>
  </section>
);

export default ProjectRepository;
