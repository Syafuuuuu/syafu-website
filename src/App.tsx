import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import "./styles/ProjectRepository.css";
import "./styles/AcademicTimeline.css";
import "./styles/ContactMe.css";
import "./styles/Skills.css";
import "./styles/Navbar.css";
import "./styles/Gallery.css";
import "./styles/QuoteBlock.css";
import "./styles/TextBlock.css";
import "./styles/VideoBlock.css";
import "./styles/ImageBlock.css";
import "./styles/ProjectHero.css";
import "./styles/PDFReader.css";

// import Hero from "./components/Hero";
const Hero = lazy(() => import("./components/Hero"));
// import AcademicTimeline from "./components/AcademicTimeline";
const AcademicTimeline = lazy(() => import("./components/AcademicTimeline"));
// import ProjectRepository from "./components/ProjectRepository";
const ProjectRepository = lazy(() => import("./components/ProjectRepository"));
import ContactMe from "./components/ContactMe";
// import Skills from "./components/Skills";
const Skills = lazy(() => import("./components/Skills"));
import Navbar from "./components/Navbar";
// import ExampleProjectPage from "./components/ExampleProjectPage";
const ExampleProjectPage = lazy(
  () => import("./components/ExampleProjectPage")
);

const App = () => (
  <Router>
    <div className="container-fluid p-0">
      <div className="background"></div>
      <Navbar />
      <main>
        {/* <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/AcademicTimeline" element={<AcademicTimeline />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectRepository />} />
          <Route path="/project-example" element={<ExampleProjectPage />} />
        </Routes> */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/AcademicTimeline" element={<AcademicTimeline />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<ProjectRepository />} />
            <Route path="/project-example" element={<ExampleProjectPage />} />
          </Routes>
        </Suspense>
      </main>
      <ContactMe />
    </div>
  </Router>
);

export default App;
