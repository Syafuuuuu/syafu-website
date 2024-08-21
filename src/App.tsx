import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar.tsx";
import Home from "./components/Home.tsx";
import "./styles/Sidebar.css";
import "./styles/Home.css";
import "./styles/HighlightCard.css";

function App() {
  return (
    <>
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
