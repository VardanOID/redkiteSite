import React from "react";
import EcommerceSuccessStoriesSubBoxText from "./EcommerceSuccessStoriesSubBoxText";
import EcommerceSuccessStoriesSubBoxButton from "./EcommerceSuccessStoriesSubBoxButton";
function EcommerceSuccessStoriesSubBox({ title, text, value}) {
  
  return (
    <div className="ecommerce-success-stories-sub-box-box">
   
      <EcommerceSuccessStoriesSubBoxText
        title={title}
        text={text}
   

      />
      <EcommerceSuccessStoriesSubBoxButton value={value}/>
    </div>
  );
}
export default EcommerceSuccessStoriesSubBox;
