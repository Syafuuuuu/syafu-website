import Shapes from "./Shapes.tsx";
import DynamicBg from "./DynamicBg.tsx";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";

function Home() {
  const [RoleText, setText] = useState("Move your mouse");
  const [DevState, setDevState] = useState("Dev");

  const handleMouseMove = (event: any) => {
    const screenWidth = window.innerWidth;
    const mouseX = event.clientX;

    if (mouseX < screenWidth / 3) {
      setText("Data Analyst");
      setDevState("Da");
    } else if (mouseX < (2 * screenWidth) / 3) {
      setText("Software Developer");
      setDevState("Dev");
    } else {
      setText("UI/UX Designer");
      setDevState("Dsg");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div style={{ alignContent: "center" }}>
        <DynamicBg type={DevState} key={DevState} />
      </div>

      {/* Landing View */}
      <div className="intro">
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
    </>
  );
}

export default Home;
