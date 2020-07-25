import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import WorkSectionItem from "./WorkSectionItem";
import Styles from "./WorkSection.module.scss";
function WorksSection({ works }) {
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
    <div className={Styles["works-section-box"]}>
      <div className={Styles["works-section-box-title"]}>Our Works</div>
      <div>
        <Slider {...settings}>
          {!!works &&
            works.map((works) => {
              return <WorkSectionItem {...works} />;
            })}
        </Slider>
      </div>
    </div>
  );
}
export default WorksSection;
