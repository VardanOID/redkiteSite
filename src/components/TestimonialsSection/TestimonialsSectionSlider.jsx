import React from "react";
import White from "../../img/white.png";
let style = {
    backgroundColor: "white",
    // width:"1000px",
    opacity: 1,
    fontSize: "14px",
    // textAlign: "left",
    // paddingTop: "10px",
    //    left:"95%"
  };
function TestimonialsSectionSlider(props) {
  return (
    <div className="testimonials-section-slider-box">
      
      <div className="testimonials-section-slider-box1">
          <img src={White} alt="" />
          <div className="legend legend1" style={style}>
            <div className="legend-author">{props.author}</div>
            <div className="legend-text">
            {props.text}
            </div>
          </div>
        </div>
      
    </div>
  );
}
export default TestimonialsSectionSlider;
