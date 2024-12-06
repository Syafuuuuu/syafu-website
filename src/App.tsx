// import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/ProjectRepository.css";
import "./styles/AcademicTimeline.css";
import "./styles/ContactMe.css";
import "./styles/Skills.css";
import "./styles/Navbar.css";

import AcademicTimeline from "./components/AcademicTimeline.tsx";
import ProjectRepository from "./components/ProjectRepository.tsx";
import ContactMe from "./components/ContactMe.tsx";
import Skills from "./components/Skills.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => (
  <div className="container-fluid p-0">
    <div className="background"></div>
    <Navbar />
    <header className="text-center py-5 section">
      <h1 className="text-offwhite">Syafiq Azhari</h1>
      <p>Computer Science Student | AI | Data Analytics | UI/UX Design</p>
    </header>

    <main>
      <AcademicTimeline />
      <Skills />
      <ProjectRepository />
      {/* Add other sections here */}
    </main>

    <ContactMe />
  </div>
);

export default App;
