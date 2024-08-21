import HighlightCard from "./HighlightCard.tsx";

function Home() {
  return (
    <>
      <div className="content">
        <div className="intro">
          <h3>Syafiq Azhari</h3>
          <h1>Artificial Intelligence Engineer</h1>
          <p>dajdajdh ajd j dla jshdj</p>
        </div>

        <div className="card-container">
          <h1>Highlight Projects</h1>
          <br></br>
          <HighlightCard
            title="Final Year Project Pt.1"
            desc="A recommendation model to encourage public transport users to interact"
          />
          <HighlightCard
            title="Unseen Solar System"
            desc="A project using Arduino Uno to enable blind kids to understand the solar system."
          />
          <HighlightCard
            title="One Million Fireflies"
            desc="Counting firefly population in Langkawi for the local community"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
