import HighlightCard from "./HighlightCard.tsx";

function HighlightProjects() {
  return (
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
  );
}

export default HighlightProjects;
