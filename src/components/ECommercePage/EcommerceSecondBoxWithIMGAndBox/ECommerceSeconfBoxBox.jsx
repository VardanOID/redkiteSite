import React from "react";

function ECommerceSeconfBoxBox(props) {
  return (
    <div className="ecommerce-second-box-box">
      <div
        className="ecommerce-second-box-title"
        dangerouslySetInnerHTML={{ __html: props.title }}
      />
      <div
        className="ecommerce-second-box-text"
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  );
}
export default ECommerceSeconfBoxBox;
