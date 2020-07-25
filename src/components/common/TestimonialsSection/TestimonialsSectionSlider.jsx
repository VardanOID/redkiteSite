import React from "react";
import Styles from "./TestimonialsSection.module.scss";
function TestimonialsSectionSlider(props) {
  return (
    <div className={Styles["testimonials-section-auter-and-text"]}>
      <div className={Styles["legend-author"]}>{props.heading}</div>
      <div
        className={Styles["legend-text"]}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  );
}
export default TestimonialsSectionSlider;
