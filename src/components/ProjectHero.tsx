interface ProjectHeroProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
}

const ProjectHero: React.FC<ProjectHeroProps> = ({
  imageUrl,
  title,
  subtitle,
}) => (
  <div className="project-hero" style={{ backgroundImage: `url(${imageUrl})` }}>
    <div className="project-hero-overlay">
      <h1 className="project-hero-title">{title}</h1>
      {subtitle && <p className="project-hero-subtitle">{subtitle}</p>}
    </div>
  </div>
);

export default ProjectHero;
