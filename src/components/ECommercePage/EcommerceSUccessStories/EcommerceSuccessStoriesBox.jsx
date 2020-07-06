import React from "react";
import EcommerceSuccessStoriesSubBox from "./EcommerceSuccessStoriesSubBox";
function EcommerceSuccessStoriesBox({ecommercePic, text, title, value},props) {
 let {id}=props;
 console.log(id);
  
  const style11 = {
    justifySelf: Number(id)%2 === 0 ? "end" : "start"
  }
  return (
    <div className="ecommerce-success-stories-box-box">
      <img
        src={ecommercePic}
        alt=""
        className="ecommerce-success-stories-box-img"
      />
      <div className="ecommerce-success-stories-box-info-box">
      <div className="a" style={style11}>
      <EcommerceSuccessStoriesSubBox text={text} title={title} value={value} id={id}/>
      </div>
      
      </div>
    </div>
  );
}
export default EcommerceSuccessStoriesBox;
