import AcademicTimeline from "./AcademicTimeline";
import ProjectRepository from "./ProjectRepository";
import Skills from "./Skills";

const Hero = () => (
  <>
    <div className="text-center py-5 section">
      <h1 className="text-offwhite">Syafiq Azhari</h1>
      <p>Computer Science Student | AI | Data Analytics | UI/UX Design</p>
    </div>
    <AcademicTimeline />
    <Skills />
    <ProjectRepository />
  </>
);

export default Hero;
