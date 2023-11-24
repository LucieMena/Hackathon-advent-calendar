import { Timer } from "../components/Timer";
import SimpleSlider from "../components/Slider";
// import logo from "../assets/logo.png";
import "./Home.css";

function Home() {
  return (
    <main>
      <div className="snowflake" />
      <div className="snowflake" />
      <div className="snowflake" />
      <div className="snowflake" />
      <div className="snowflake" />
      <p className="login">Login</p>
      <p className="login">Sign up</p>
      <h2> Advent Calendar</h2>
      {/* <img className="chaine1" src={logo} alt="seinen" /> */}
      <div className="main">
        <div className="app">
          <div className="snowflake" />
          <div className="container">
            <h1 className="header">Happy New Year in</h1>
            <Timer deadline="November,29, 2023" />
            <div className="snowflake" />
          </div>
          <div className="snowflake" />
          <div className="snowflake" />
          <div className="snowflake" />
          <div className="snowflake" />
          <div className="snowflake" />
        </div>
      </div>
      <h4 className="date-container">Choisissez-votre date</h4>
      <div>
        <SimpleSlider />
      </div>
    </main>
  );
}

export default Home;
