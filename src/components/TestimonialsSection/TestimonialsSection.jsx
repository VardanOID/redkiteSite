import React from "react";
import TestimonialsSectionSlider from "./TestimonialsSectionSlider";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function TestimonialsSection() {
  return (
    <div className="testimonials-section-box">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        autoPlay
        infiniteLoop
        transitionTime={500}
        showIndicators={true}
        width="100%"
        // height= "500px"
        interval={5000}
      >
        <TestimonialsSectionSlider
          author="OWNER OF THE GALFES RAMEN DEUREN"
          text="“Great company, trustworthy, always deliver as they promise. Too many aspects of the solution were unknown at the beginning but their ability to narrow down the MVP, make it stage based approach saved for us lot os money and time. Our choice of technology partner for sure”"
        />
        <TestimonialsSectionSlider
          author="OWNER OF THE GALFES RAMEN DEUREN"
          text="“Great company, trustworthy, always deliver as they promise. Too many aspects of the solution were unknown at the beginning but their ability to narrow down the MVP, make it stage based approach saved for us lot os money and time. Our choice of technology partner for sure”"
        />
        <TestimonialsSectionSlider
          author="OWNER OF THE GALFES RAMEN DEUREN"
          text="“Great company, trustworthy, always deliver as they promise. Too many aspects of the solution were unknown at the beginning but their ability to narrow down the MVP, make it stage based approach saved for us lot os money and time. Our choice of technology partner for sure”"
        />
      </Carousel>
    </div>
  );
}
export default TestimonialsSection;
