import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Slider from "react-slick";
import Work1 from "../../img/work1.png"
import Work2 from "../../img/work2.png"
import Work3 from "../../img/work3.png"
import Work4 from "../../img/work4.png"
// import 'slick-carousel/slick/slick.min';

function WorksSection(props) {
  
    
  return <div className="">
  

            <img src={props.workIMG} alt="" className="work-img" />
            <p>{props.title}</p>
        
        
      
  </div>;
}
export default WorksSection;
