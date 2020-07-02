import React from "react";

function ECommercePageRedkiteWillItems(props) {
  return (
    <div className="ecommerce-page-redkite-will-items-box">
      <div className="ecommerce-page-redkite-will-items-text">
        <div>
          <img
            src={props.checkimg}
            alt=""
            className="ecommerce-page-redkite-will-items-img"
          />
        </div>
        {props.text}
      </div>
    </div>
  );
}
export default ECommercePageRedkiteWillItems;
