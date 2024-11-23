import { useState } from "react";

// function Tricks() {
//   return (
//     <>
//       <div className="SidebySide">
//         <h1>Tricks of the Trade</h1>
//         <br></br>
//         <div className="Dev-Col">
//           <ul>
//             <TrickDetail name="Python" filename="python" />
//             <TrickDetail name="Java" filename="java" />
//             <TrickDetail name="HTML" filename="html" />
//             <TrickDetail name="CSS" filename="css" />
//             <TrickDetail name="React Js" filename="react" />
//             <TrickDetail name="Flutter" filename="flutter" />
//           </ul>
//         </div>
//         <div className="Dsg-Col">
//           <ul>
//             <TrickDetail name="Figma" filename="figma" />
//             <TrickDetail name="Adobe Illsutrator" filename="ai" />
//             <TrickDetail name="Adobe Photoshop" filename="ps" />
//             <TrickDetail name="Adobe Premiere Pro" filename="pr" />
//             <TrickDetail name="Adobe After Effects" filename="ae" />
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// function TrickDetail(props: any) {
//   return (
//     <>
//       <li>
//         <div></div>
//         <img src={"./assets/" + props.filename + ".png"} width="40"></img>
//         {props.name}
//       </li>
//     </>
//   );
// }

const Tricks = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof tools>("Frontend");

  const categories = [
    "Data Analytic & Ai",
    "Frontend",
    "Backend",
    "Database",
    "IOT",
    "UI/UX Design",
  ];

  //All of the Pics

  const tools: {
    Frontend: { name: string; icon: string }[];
    "Data Analytic & Ai": { name: string; icon: string }[];
    Backend: { name: string; icon: string }[];
    Database: { name: string; icon: string }[];
    IOT: { name: string; icon: string }[];
    "UI/UX Design": { name: string; icon: string }[];
  } = {
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

  return (
    <>
      <div className="tricks-header">
        <h3>Tricks of the Trade</h3>
      </div>
      <div className="tricks-container">
        <div className="tricks-left">
          <ul>
            {categories.map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() =>
                  setSelectedCategory(category as keyof typeof tools)
                }
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="tricks-right">
          <div className="tools-grid">
            {tools[selectedCategory].map((tool) => (
              <div key={tool.name} className="tool-card">
                <img
                  src={tool.icon}
                  alt={`${tool.name} icon`}
                  className="tool-icon"
                />
                <h3>{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Tricks;
