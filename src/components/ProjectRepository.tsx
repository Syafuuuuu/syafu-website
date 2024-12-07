// import React from "react";
// import "./ProjectRepository.css";

const projects = [
  {
    title: "Social Interaction Model in Public Spaces (SIMPS)",
    description:
      "My Final year Project (FYP) to merge both Artificial Intelligence and Human Behaviour",
    imageUrl: "./public/assetsFYP.png", // Update this with the actual path to your image
    link: "https://github.com/yourusername/ai-chatbot", // GitHub link or live demo link
  },
  {
    title: "Oh!Crab Project",
    description:
      "Leading a high-impact project from the angle of design, feel, and vibes.",
    imageUrl: "./public/assets/OHCrab.png", // Update this with the actual path to your image
    link: "https://github.com/yourusername/data-dashboard", // GitHub link or live demo link
  },
  {
    title: "Experimenting with Orange Data Mining Tool",
    description:
      "Using Brain tumour MRI dataset from KAggle, I find out how good is Orange",
    imageUrl: "./public/assets/BrainMRI.png", // Update this with the actual path to your image
    link: "https://dribbble.com/yourusername", // Dribbble link or portfolio link
  },
  // Add more projects as needed
];

const ProjectRepository = () => (
  <section className="project-repository-section section container">
    <h2 className="text-offwhite">Project Repository</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-item"
          key={index}
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
        </a>
      ))}
    </div>
    <div className="text-center mt-4">
      <a
        href="https://github.com/yourusername?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="view-all-link"
      >
        View Project Repository
      </a>
    </div>
  </section>
);

export default ProjectRepository;
