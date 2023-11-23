import { Timer } from "../components/Timer";
import SimpleSlider from '../components/Slider'
// import Slider from 'react-slick'

function Home() {

  return (
    <div className="main">
      <div className="app">
        <div className="container">
          <h1 className="header">Happy New Year in</h1>
          <Timer deadline="December, 31, 2023" />
        </div>
      </div>
      <div>
        <h2> Adevent Calendar</h2>
        <SimpleSlider/>
      </div>
    </div>
  );
}

export default Home;
