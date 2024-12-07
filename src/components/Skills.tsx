import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
type ToolCategory = { name: string; icon: string };
type Tools = { [category: string]: ToolCategory[] };

import octave from "/assets/octave.png";
import MATLAB from "/assets/MATLAB.png";
import powerbi from "/assets/powerbi.png";
import keras from "/assets/keras.png";
import tf from "/assets/tf.png";
import html from "/assets/html.png";
import python from "/assets/python.png";

import react from "/assets/react.png";
import js from "/assets/js.png";
import css from "/assets/css.png";
import flutter from "/assets/flutter.png";
import bootstrap from "/assets/bootstrap.png";
import flask from "/assets/flask.png";
import django from "/assets/django.png";
import java from "/assets/java.png";
import php from "/assets/php.png";
import mysql from "/assets/mysql.png";
import firebase from "/assets/firebase.png";
import postgre from "/assets/postgre.png";
import arduino from "/assets/arduino.png";
import raspberry from "/assets/raspberry.png";
import esp from "/assets/esp.png";
import figma from "/assets/figma.png";
import ai from "/assets/ai.png";
import ps from "/assets/ps.png";

const tools: Tools = {
  "Data Analytic & Ai": [
    { name: "Octave", icon: octave },
    { name: "MATLAB", icon: MATLAB },
    { name: "Power BI", icon: powerbi },
    { name: "Keras", icon: keras },
    { name: "TensorFlow", icon: tf },
    { name: "Orange", icon: html },
    { name: "Python", icon: python },
  ],
  Frontend: [
    { name: "React", icon: react },
    { name: "JavaScript", icon: js },
    { name: "CSS", icon: css },
    { name: "HTML", icon: html },
    { name: "Flutter", icon: flutter },
    { name: "Bootstrap", icon: bootstrap },
    { name: "Flask", icon: flask },
    { name: "Django", icon: django },
  ],
  Backend: [
    { name: "JavaScript", icon: js },
    { name: "Java", icon: java },
    { name: "PHP", icon: php },
    { name: "Python", icon: python },
    { name: "MySQL", icon: mysql },
  ],
  Database: [
    { name: "MySQL", icon: mysql },
    { name: "Firebase", icon: firebase },
    { name: "PostgreSQL", icon: postgre },
  ],
  IOT: [
    { name: "Arduino", icon: arduino },
    { name: "Raspberry Pi", icon: raspberry },
    { name: "ESP8266", icon: esp },
  ],
  "UI/UX Design": [
    { name: "Figma", icon: figma },
    { name: "Photoshop", icon: ps },
    { name: "Illustrator", icon: ai },
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
