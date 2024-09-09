// function Projects() {
//   return (
//     <>
//       <div className="proj-left">
//         <div>
//           <h3>Work Archive</h3>
//         </div>
//         <ul>
//           <Project title="FYP Pt.1" desc="yeet" />
//           <Project title="Project #2" desc="Description for proj #2" />
//           <Project title="Project #3" desc="Description for proj #3" />
//           <Project title="Project #4" desc="Description for proj #4" />
//           <Project title="Project #5" desc="Description for proj #5" />
//           <Project title="Project #6" desc="Description for proj #6" />
//         </ul>
//       </div>
//       <div className="proj-right">
//         <Preview url="https://placehold.co/1000x1000" />
//       </div>
//     </>
//   );
// }

// function Project(props: any) {
//   return (
//     <li className="proj">
//       <a href={props.title}>
//         <div className="proj-row">
//           <div className="proj-title">
//             <h3>{props.title}</h3>
//           </div>
//           <div className="proj-desc">
//             <p>{props.desc}</p>
//           </div>
//         </div>
//       </a>
//     </li>
//   );
// }

// function Preview(props: any) {
//   return (
//     <div
//       className="preview-wrapper"
//       style={{ backgroundImage: "url(" + props.url + ")" }}
//     ></div>
//   );
// }

// export default Projects;

import { useState, useEffect } from "react";

function Projects() {
  const [hoveredImage, setHoveredImage] = useState("");
  const [imageToDisplay, setImageToDisplay] = useState(
    "https://placehold.co/1000x1000"
  );
  const [fadeClass, setFadeClass] = useState("fade-in");

  const projects = [
    { title: "FYP Pt.1", desc: "yeet", imgUrl: "https://placehold.co/600x400" },
    {
      title: "Project #2",
      desc: "Description for proj #2",
      imgUrl: "https://placehold.co/700x400",
    },
    {
      title: "Project #3",
      desc: "Description for proj #3",
      imgUrl: "https://placehold.co/800x400",
    },
    {
      title: "Project #4",
      desc: "Description for proj #4",
      imgUrl: "https://placehold.co/900x400",
    },
    {
      title: "Project #5",
      desc: "Description for proj #5",
      imgUrl: "https://placehold.co/1000x400",
    },
    {
      title: "Project #6",
      desc: "Description for proj #6",
      imgUrl: "https://placehold.co/1100x400",
    },
  ];

  // Use useEffect to handle image change with transition
  useEffect(() => {
    if (hoveredImage) {
      setFadeClass("fade-out"); // Trigger fade out

      // Wait for the fade-out transition to finish before changing the image
      const timeout = setTimeout(() => {
        setImageToDisplay(hoveredImage);
        setFadeClass("fade-in"); // Trigger fade in
      }, 300); // Match the duration with the CSS transition time

      return () => clearTimeout(timeout); // Cleanup timeout on component unmount or re-render
    }
  }, [hoveredImage]);

  return (
    <>
      <div className="proj-left">
        <div>
          <h3>Work Archive</h3>
        </div>
        <ul>
          {projects.map((project, index) => (
            <Project
              key={index}
              title={project.title}
              desc={project.desc}
              onHover={() => setHoveredImage(project.imgUrl)} // Change the preview image on hover
              onLeave={() => setHoveredImage("")} // Reset the preview image on leave
            />
          ))}
        </ul>
      </div>
      <div className="proj-right">
        <Preview url={imageToDisplay} fadeClass={fadeClass} />
      </div>
    </>
  );
}

function Project(props: any) {
  return (
    <li
      className="proj"
      onMouseEnter={props.onHover} // Trigger hover event
      onMouseLeave={props.onLeave} // Trigger leave event
    >
      <a href={props.title}>
        <div className="proj-row">
          <div className="proj-title">
            <h3>{props.title}</h3>
          </div>
          <div className="proj-desc">
            <p>{props.desc}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

function Preview(props: any) {
  return (
    <div
      className={`preview-wrapper ${props.fadeClass}`} // Add the fade class for transitions
      style={{ backgroundImage: `url(${props.url})` }}
    ></div>
  );
}

export default Projects;
