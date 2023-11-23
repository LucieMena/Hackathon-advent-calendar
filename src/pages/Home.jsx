import { Timer } from "../components/Timer";
import SimpleSlider from "../components/Slider";
import './Home.css';

function Home() {
  return (
    <main>
      <h2> Adevent Calendar</h2>
      <div className="main">
        <div className="app">
          <div className="container">
            <h1 className="header">Happy New Year in</h1>
            <Timer deadline="December, 31, 2023" />
          </div>
        </div>
      </div>
        <div>
          <SimpleSlider />
        </div>
      
    </main>
  );
}

export default Home;
