function Tricks() {
  return (
    <>
      <div className="SidebySide">
        <div className="Dev-Col">
          <ul>
            <TrickDetail name="Python" filename="python" />
            <TrickDetail name="Java" filename="java" />
            <TrickDetail name="HTML" filename="html" />
            <TrickDetail name="CSS" filename="css" />
            <TrickDetail name="React Js" filename="react" />
            <TrickDetail name="Flutter" filename="flutter" />
          </ul>
        </div>
        <div className="Dsg-Col">
          <ul>
            <TrickDetail name="Figma" filename="figma" />
            <TrickDetail name="Adobe Illsutrator" filename="ai" />
            <TrickDetail name="Adobe Photoshop" filename="ps" />
            <TrickDetail name="Adobe Premiere Pro" filename="pr" />
            <TrickDetail name="Adobe After Effects" filename="ae" />
          </ul>
        </div>
      </div>
    </>
  );
}

function TrickDetail(props: any) {
  return (
    <>
      <li>
        <div></div>
        <img src={"./assets/" + props.filename + ".png"} width="40"></img>
        {props.name}
      </li>
    </>
  );
}

export default Tricks;
