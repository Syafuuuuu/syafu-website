import { useParams } from "react-router-dom";
import projects from "./ProjectData"; // Import your project data

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((proj) => proj.id === parseInt(id as string));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-detail section">
      <div className="container">
        <h2 className="text-offwhite">{project.title}</h2>
        <img src={project.imageUrl} alt={project.title} className="img-fluid" />
        <p>{project.description}</p>
        <div className="placeholder-content">
          <h3 className="text-offwhite">Project Overview</h3>
          <p>
            The Social Interaction Model in Public Spaces (SIMPS) project
            explores the intersection of Artificial Intelligence and Human
            Behaviour. The project aims to understand and predict human
            interactions in public spaces using advanced AI algorithms and
            behavioral analysis.
          </p>
          <img
            src={project.overviewImageUrl}
            alt={`${project.title} Overview`}
            className="img-fluid"
          />
          <h3 className="text-offwhite">Technologies Used</h3>
          <ul>
            <li>Python</li>
            <li>TensorFlow</li>
            <li>OpenCV</li>
            <li>Scikit-learn</li>
            <li>Jupyter Notebook</li>
          </ul>
          <h3 className="text-offwhite">Challenges and Solutions</h3>
          <p>
            One of the main challenges was accurately detecting and analyzing
            human interactions in crowded spaces. This was addressed by
            integrating deep learning models with real-time video processing to
            improve accuracy and responsiveness. The project also dealt with
            privacy concerns by anonymizing data and focusing on
            non-identifiable interaction patterns.
          </p>
          <img
            src={project.challengesImageUrl}
            alt={`${project.title} Challenges`}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
