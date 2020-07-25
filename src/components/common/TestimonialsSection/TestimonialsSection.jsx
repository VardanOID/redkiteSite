import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import Styles from "./TestimonialsSection.module.scss";
import TestimonialSliderItems from "./TestimonialsSectionSlider";
function WorksSection({ reviews }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className={Styles["testimonials-section-box"]}>
      <div>
        <Slider {...settings}>
          {!!reviews &&
            reviews.map((data) => {
              return <TestimonialSliderItems {...data} />;
            })}
        </Slider>
      </div>
    </div>
  );
}
export default WorksSection;
