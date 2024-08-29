function Projects() {
  return (
    <>
      <div className="proj-left">
        <div>
          <h3>Work Archive</h3>
        </div>
        <ul>
          <Project title="FYP Pt.1" desc="yeet" />
          <Project title="Project #2" desc="Description for proj #2" />
          <Project title="Project #3" desc="Description for proj #3" />
          <Project title="Project #4" desc="Description for proj #4" />
          <Project title="Project #5" desc="Description for proj #5" />
          <Project title="Project #6" desc="Description for proj #6" />
        </ul>
      </div>
      <div className="proj-right">
        <Preview url="https://placehold.co/1000x1000" />
      </div>
    </>
  );
}

function Project(props: any) {
  return (
    <li className="proj">
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
      className="preview-wrapper"
      style={{ backgroundImage: "url(" + props.url + ")" }}
    ></div>
  );
}

export default Projects;
