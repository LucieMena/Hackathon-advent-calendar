import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import { useNavigate } from "react-router-dom";

const SimpleSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div onClick={() => navigate("/PageCluedo")}>
          <h3 className="slide-1" >
            26 DECEMBRE
          </h3>
        </div>
        <div onClick={() => navigate("/PageQuiz")}>
          <h3 className="slide-2" >27 DECEMBRE</h3>
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
    </div>
  );
};

export default SimpleSlider;
