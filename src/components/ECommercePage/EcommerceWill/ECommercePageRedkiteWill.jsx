import React from "react";
import ECommercePageRedkiteWillItemsBox from "./ECommercePageRedkiteWillItemsBox";
function ECommercePageRedkiteWill({ redkiteWill }) {
  return (
    <div>
      <div className="ecommerce-page-redkite-will-box">
        <div className="ecommerce-page-redkite-will-box-title">
          Redkite Will:
        </div>
        <ECommercePageRedkiteWillItemsBox redkiteWill={redkiteWill} />
      </div>
    </div>
  );
}
export default ECommercePageRedkiteWill;
