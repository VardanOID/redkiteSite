import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import WorkSectionItem from "./WorkSectionItem";
import styles from "./WorkSection.module.scss";
function WorksSection({ works }) {
  const mainWorks = works.slice(0, 2);
  const restWorks = works.slice(2);
  console.log("mainWorks", mainWorks);
  console.log("restWorks", restWorks);
  const [isShown, setShow] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    arrow: true,
    // responsive: [
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       rows: 2,
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 300,
    //     settings: {
    //       rows: 2,
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <div className={styles["works-section-box"]}>
      <div className={styles["works-section-box-title"]}>Our Works</div>
      <div className={styles.workSectionForMobileHide}>
        <Slider {...settings}>
          {!!works &&
            works.map((works) => {
              return <WorkSectionItem {...works} />;
            })}
        </Slider>
      </div>

      <div className={styles.workSectionForMobileShow}>
        {!!mainWorks &&
          mainWorks.map((works) => {
            return <WorkSectionItem {...works} />;
          })}
        {!!restWorks &&
          isShown &&
          restWorks.map((works) => {
            return <WorkSectionItem {...works} />;
          })}
      </div>
      <div className={styles.showMoreButtonBox}>
        <input
          type="button"
          value={isShown ? "Show Less" : "EXPLORE ALL works"}
          className={styles.showMoreButton}
          onClick={() => {
            setShow(!isShown);
          }}
        />
      </div>
    </div>
  );
}
export default WorksSection;
