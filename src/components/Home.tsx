import HighlightCard from "./HighlightCard.tsx";
import Projects from "./Projects.tsx";
import Tricks from "./Tricks.tsx";
import Reveal from "./Reveal.tsx";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

function Home() {
  const [RoleText, setRoleText] = useState("Move your mouse");

  const handleMouseEnter = (newText: any) => {
    setRoleText(newText);
  };

  return (
    <>
      <div>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "33.33%",
            height: "100vh",
            cursor: "crosshair",
          }}
          onMouseEnter={() => handleMouseEnter("Data Analyst")}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "33.33%",
            width: "33.33%",
            height: "100vh",
            cursor: "auto",
          }}
          onMouseEnter={() => handleMouseEnter("Software Developer")}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "66.66%",
            width: "33.33%",
            height: "100vh",
            cursor: "crosshair",
          }}
          onMouseEnter={() => handleMouseEnter("UI/UX Designer")}
        />
      </div>

      <div className="content">
        {/* Landing View */}
        <div className="intro prevent-select">
          <div>
            <h3>Syafiq Azhari</h3>
            <AnimatePresence>
              <motion.h1
                key={RoleText} // Important for AnimatePresence to detect changes
                initial={{ opacity: 0, y: 10 }} // Starting state of animation
                animate={{ opacity: 1, y: 0 }} // Ending state of animation
                exit={{ opacity: 0, y: -10 }} // Exit state for animation
                transition={{ duration: 0.5 }} // Animation duration
                style={{
                  position: "absolute",
                  width: "100%",
                  fontSize: "5rem",
                }}
              >
                {RoleText}
              </motion.h1>
            </AnimatePresence>
            <p>dajdajdh ajd j dla jshdj</p>
          </div>
        </div>
        {/* Project Highlights */}
        <div className="card-container">
          <h1>Highlight Projects</h1>
          <br></br>
          <HighlightCard
            pic="./assets/fyp.jpg"
            title="Final Year Project Pt.1"
            url="/fyp"
          />
          <HighlightCard
            pic="./assets/solareclipse.jpg"
            title="Unseen Solar Eclipse"
            url="/solareclipse"
          />
          <HighlightCard
            pic="./assets/firefly.png"
            title="One Million Fireflies"
            url="/firefly"
          />
        </div>
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

export default Home;
