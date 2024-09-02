import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar.tsx";
import Home from "./components/Home.tsx";
import HighlightProjects from "./components/HighlightProjects.tsx";
import Projects from "./components/Projects.tsx";
import Tricks from "./components/Tricks.tsx";
import "./styles/Sidebar.css";
import "./styles/Home.css";
import "./styles/HighlightCard.css";
import "./styles/HighlightProjects.css";
import "./styles/Tricks.css";
import "./styles/Projects.css";
import "./styles/App.css";

function App() {
  return (
    <>
      <Sidebar />
      <div className="content">
        <Home />
        {/* Project Highlights */}
        <HighlightProjects />
        {/* Tricks of the Trade */}
        <div className="tricks-container">
          <Tricks />
        </div>
        {/* Project Archive */}
        <div className="proj-container">
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
