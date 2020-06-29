import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
// import WorkSectionItem from "./WorkSectionItem";
import Work1 from "../../../img/work1.png";
import Work2 from "../../../img/work2.png";
import Work3 from "../../../img/work3.png";
import Work4 from "../../../img/work4.png";
// import 'slick-carousel/slick/slick.min';

function WorksSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    arrow: true,
  };
  return (
    <div className="works-section-box">
      <div className="works-section-box-title">Our Works</div>
      <div>
        <Slider {...settings}>
          <div>
            <img src={Work1} alt="" className="work-img" />
            <p className="work-img-title">Backend, Web design</p>
          </div>
          <div>
            <img src={Work2} alt="" className="work-img" />
            <p className="work-img-title">Sales, Marketing</p>
          </div>
          <div>
            <img src={Work3} alt="" className="work-img" />
            <p className="work-img-title">Middleware development</p>
          </div>
          <div>
            <img src={Work4} alt="" className="work-img" />
            <p className="work-img-title">E-commerce solutions, Backend, Web design</p>
          </div>
          <div>
            <img src={Work1} alt="" className="work-img" />
            <p className="work-img-title">Backend, Web design</p>
          </div>
          <div>
            <img src={Work2} alt="" className="work-img" />
            <p className="work-img-title">Sales, Marketing</p>
          </div>
          <div>
            <img src={Work3} alt="" className="work-img" />
            <p className="work-img-title">Middleware development</p>
          </div>
          <div>
            <img src={Work4} alt="" className="work-img" />
            <p className="work-img-title">E-commerce solutions, Backend, Web design</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default WorksSection;
