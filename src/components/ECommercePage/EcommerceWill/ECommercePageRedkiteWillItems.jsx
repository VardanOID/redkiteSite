import React from "react";

function ECommercePageRedkiteWillItems(props) {
  return (
    <div className="ecommerce-page-redkite-will-items-box">
      <div className="ecommerce-page-redkite-will-items-text">
        <div>
          <img
            src={props.image}
            alt=""
            className="ecommerce-page-redkite-will-items-img"
          />
        </div>
        {props.paragraph}
      </div>
    </div>
  );
}
export default ECommercePageRedkiteWillItems;
