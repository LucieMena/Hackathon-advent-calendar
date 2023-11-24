import { Timer } from "../components/Timer";
import SimpleSlider from "../components/Slider";
import './Home.css';

function Home() {
  return (
    <main>
      <h2> AdEvent Calendar</h2>
      <div className="main">
        <div className="app">
          <div className="container">
            <h1 className="header">Nouvel an dans</h1>
            <Timer deadline="November, 29, 2023" />
          </div>
        </div>
      </div>
      <h4 className="date-container">
        Choisissez-votre date
      </h4>
        <div>
          <SimpleSlider />
        </div>
      
    </main>
  );
}

export default Home;
