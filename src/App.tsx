import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/ProjectRepository.css";
import "./styles/AcademicTimeline.css";
import "./styles/ContactMe.css";
import "./styles/Skills.css";
import "./styles/Navbar.css";
import "./styles/ProjectDetail.css";
import "./styles/WIP.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AcademicTimeline from "./components/AcademicTimeline.tsx";
import ProjectRepository from "./components/ProjectRepository.tsx";
import ContactMe from "./components/ContactMe.tsx";
import Skills from "./components/Skills.tsx";
import Navbar from "./components/Navbar.tsx";
import ProjectDetail from "./components/ProjectDetail.tsx";

const App = () => (
  <Router>
    <div className="container-fluid p-0">
      <div className="background"></div>
      <Navbar />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/project/:id" element={<ProjectDetail />} />{" "}
      </Routes>
      <ContactMe />
    </div>
  </Router>
);

const Home = () => (
  <>
    <header className="text-center py-5 section">
      <h1 className="text-offwhite">Syafiq Azhari</h1>
      <p>Computer Science Student | AI | Data Analytics | UI/UX Design</p>
    </header>

    <main>
      <AcademicTimeline />
      <Skills />
      <ProjectRepository />
    </main>
  </>
);

export default App;
