import { useRef  } from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img26 from "../assets/img26.png";
import img27 from "../assets/img27.png";
import img28 from "../assets/img28.png";
import img29 from "../assets/img29.png";
import img30 from "../assets/img30.png";
import img31 from "../assets/img31.png";
import './Slider.css';

const SimpleSlider = () => {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const parametresSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    ref: sliderRef,
  };

    return (
      <div>
        <Slider {...parametresSlider}>
          <div onClick={() => navigate("/PageQuiz")}>
            <h3 className="slide-1">26 DECEMBRE</h3>
          </div>
          <div onClick={() => navigate("/PageCluedo")}>
            <h3 className="slide-2">27 DECEMBRE</h3>
          </div>
          <div>
            <h3 className="slide-3">28 DECEMBRE</h3>
          </div>
          <div>
            <h3 className="slide-4">29 DECEMBRE</h3>
          </div>
          <div>
            <h3 className="slide-5">30 DECEMBRE</h3>
          </div>
          <div>
            <h3 className="slide-6">31 DECEMBRE</h3>
          </div>
        </Slider>

        {/* Boutons personnalisés sans icônes */}
        <div className="custom-buttons">
          <div className="custom-button" onClick={() => sliderRef.current.slickGoTo(0)}>
          <img className="icone" src={img26} alt="" />
          </div>
          <div className="custom-button" onClick={() => sliderRef.current.slickGoTo(1)}>
          <img className="icone" src={img27} alt="" />
          </div>
          <div className="custom-button" onClick={() => sliderRef.current.slickGoTo(2)}>
          <img className="icone" src={img28} alt="" />
          </div>
          <div className="custom-button" onClick={() => sliderRef.current.slickGoTo(3)}>
          <img className="icone" src={img29} alt="" />
          </div>
          <div className="custom-button" onClick={() => sliderRef.current.slickGoTo(4)}>
          <img className="icone" src={img30} alt="" />
          </div>
          <div className="custom-button" onClick={() => sliderRef.current.slickGoTo(5)}>
          <img className="icone" src={img31} alt="" />
          </div>
        </div>
      </div>
    );
  }
export default SimpleSlider;