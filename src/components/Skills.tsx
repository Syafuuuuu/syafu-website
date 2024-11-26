import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
type ToolCategory = { name: string; icon: string };
type Tools = { [category: string]: ToolCategory[] };
const tools: Tools = {
  "Data Analytic & Ai": [
    { name: "Octave", icon: "./assets/octave.png" },
    { name: "MATLAB", icon: "./assets/MATLAB.png" },
    { name: "Power BI", icon: "./assets/powerbi.png" },
    { name: "Keras", icon: "./assets/keras.png" },
    { name: "TensorFlow", icon: "./assets/tf.png" },
    { name: "Orange", icon: "./assets/html.png" },
    { name: "Python", icon: "./assets/python.png" },
  ],
  Frontend: [
    { name: "React", icon: "./assets/react.png" },
    { name: "JavaScript", icon: "./assets/js.png" },
    { name: "CSS", icon: "./assets/css.png" },
    { name: "HTML", icon: "./assets/html.png" },
    { name: "Flutter", icon: "./assets/flutter.png" },
    { name: "Bootstrap", icon: "./assets/bootstrap.png" },
    { name: "Flask", icon: "./assets/flask.png" },
    { name: "Django", icon: "./assets/django.png" },
  ],
  Backend: [
    { name: "JavaScript", icon: "./assets/js.png" },
    { name: "Java", icon: "./assets/java.png" },
    { name: "PHP", icon: "./assets/php.png" },
    { name: "Python", icon: "./assets/python.png" },
    { name: "MySQL", icon: "./assets/mysql.png" },
  ],
  Database: [
    { name: "MySQL", icon: "./assets/mysql.png" },
    { name: "Firebase", icon: "./assets/firebase.png" },
    { name: "PostgreSQL", icon: "./assets/postgre.png" },
  ],
  IOT: [
    { name: "Arduino", icon: "./assets/arduino.png" },
    { name: "Raspberry Pi", icon: "./assets/raspberry.png" },
    { name: "ESP8266", icon: "./assets/esp.png" },
  ],
  "UI/UX Design": [
    { name: "Figma", icon: "./assets/figma.png" },
    { name: "Photoshop", icon: "./assets/ps.png" },
    { name: "Illustrator", icon: "./assets/ai.png" },
  ],
};
const Skills = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="skills-section section">
      {" "}
      <h2 className="text-offwhite">Skills</h2>{" "}
      <Tabs
        selectedIndex={selectedTab}
        onSelect={(index) => setSelectedTab(index)}
      >
        {" "}
        <TabList>
          {" "}
          {Object.keys(tools).map((category, index) => (
            <Tab key={index}>{category}</Tab>
          ))}{" "}
        </TabList>{" "}
        {Object.keys(tools).map((category, index) => (
          <TabPanel key={index}>
            {" "}
            <div className="skills-list">
              {" "}
              {tools[category].map((tool) => (
                <div className="skill-item" key={tool.name}>
                  {" "}
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="skill-icon"
                  />{" "}
                  <p>{tool.name}</p>{" "}
                </div>
              ))}{" "}
            </div>{" "}
          </TabPanel>
        ))}{" "}
      </Tabs>{" "}
    </section>
  );
};
export default Skills;
