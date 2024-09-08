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

  const tools: {
    Frontend: { name: string; icon: string }[];
    "Data Analytic & Ai": { name: string; icon: string }[];
    Backend: { name: string; icon: string }[];
    Database: { name: string; icon: string }[];
    IOT: { name: string; icon: string }[];
    "UI/UX Design": { name: string; icon: string }[];
  } = {
    "Data Analytic & Ai": [
      { name: "Octave", icon: "./assets/.png" },
      { name: "Matlab", icon: "./assets/css.png" },
      { name: "Power BI", icon: "./assets/react.png" },
      { name: "Keras", icon: "./assets/react.png" },
      { name: "TensorFlow", icon: "./assets/react.png" },
      { name: "Orange", icon: "./assets/html.png" },
      { name: "Python", icon: "./assets/react.png" },
    ],
    Frontend: [
      { name: "React", icon: "./assets/react.png" },
      { name: "JavaScript", icon: "./assets/.png" },
      { name: "CSS", icon: "./assets/css.png" },
      { name: "HTML", icon: "./assets/html.png" },
      { name: "Flutter", icon: "./assets/html.png" },
      { name: "Bootstrap", icon: "./assets/.png" },
      { name: "Flask", icon: "./assets/.png" },
      { name: "Django", icon: "./assets/.png" },
    ],
    Backend: [
      { name: "JavaScript", icon: "./assets/.png" },
      { name: "Java", icon: "./assets/.png" },
      { name: "PHP", icon: "./assets/.png" },
      { name: "Python", icon: "./assets/python.png" },
      { name: "SQL", icon: "./assets/.png" },
    ],
    Database: [
      { name: "MySQL", icon: "./assets/.png" },
      { name: "Firebase", icon: "./assets/.png" },
      { name: "PostgreSQL", icon: "./assets/.png" },
    ],
    IOT: [
      { name: "Arduino", icon: "./assets/.png" },
      { name: "Raspberry Pi", icon: "./assets/.png" },
      { name: "ESP8266", icon: "./assets/.png" },
    ],
    "UI/UX Design": [
      { name: "Figma", icon: "./assets/.png" },
      { name: "Photoshop", icon: "./assets/.png" },
      { name: "Illustrator", icon: "./assets/.png" },
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
