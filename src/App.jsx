// import { useState } from 'react'
import './App.css'
import Slider from 'react-slick'
// import SimpleSlider from './components/Slider';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      <h2> Adevent Calendar</h2>
      <Slider {...settings}>
        <div>
          <h3>SLIDE 1</h3>
        </div>
        <div>
          <h3>SLIDE 2</h3>
        </div>
        <div>
          <h3>SLIDE 3</h3>
        </div>
        <div>
          <h3>SLIDE 4</h3>
        </div>
        <div>
          <h3>SLIDE 5</h3>
        </div>
        <div>
          <h3>SLIDE 6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default App
