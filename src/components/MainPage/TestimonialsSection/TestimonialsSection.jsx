import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
// import WorkSectionItem from "./WorkSectionItem";
// import Work1 from "../../../img/work1.png";
// import Work2 from "../../../img/work2.png";
// import Work3 from "../../../img/work3.png";
// import Work4 from "../../../img/work4.png";
// import 'slick-carousel/slick/slick.min';
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
    <div className="testimonials-section-box">
      {/* <div className="testimonials-section-box-title">Our Works</div> */}
      <div>
        <Slider {...settings}>
          {!!reviews &&
            reviews.map((data) => {
              return <TestimonialSliderItems {...data} />;
            })}
          {/*           
          <TestimonialSliderItems
            author=" OWNER OF THE GALFES RAMEN DEUREN"
            text=" “Great company, trustworthy, always deliver as they promise. too
              many aspects of the solution were unknown at the beginning but
              their ability to narrow it stage based approach saved for us lot
              os money and time. partner for sure”"
          />
             <TestimonialSliderItems
            author=" OWNER OF THE GALFES RAMEN DEUREN "
            text=" “Great company, trustworthy, always deliver as they promise. too
              many aspects of the solution were unknown at the beginning but
              their ability to narrow it stage based approach saved for us lot
              os money and time. partner for sure”"
          />
             <TestimonialSliderItems
            author=" OWNER OF THE GALFES RAMEN DEUREN"
            text=" “Great company, trustworthy, always deliver as they promise. too
              many aspects of the solution were unknown at the beginning but
              their ability to narrow it stage based approach saved for us lot
              os money and time. partner for sure”"
          /> */}
        </Slider>
      </div>
    </div>
  );
}
export default WorksSection;
