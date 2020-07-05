import React from "react";
import ECommercePageCoverBox from "./EcommerseCover/ECommercePageCoverBox";
import ECommercePageBoxForBoxAndText from "./EcommerceBoxAndText/ECommercePageBoxForBoxAndText";
import ECommerceSecondBoxWithIMGAndBox from "./EcommerceSecondBoxWithIMGAndBox/ECommerceSecondBoxWithIMGAndBox";
import ECommercePageRedkiteWill from "./EcommerceWill/ECommercePageRedkiteWill";
import EcommerceCustomerJourney from "./EcommerceCustomerJourney/EcommerceCustomerJourney";
import EcommerceWhyRedkite from "./EcommerceWhyRedkite/EcommerceWhyRedkite";
import EcommerceSuccessStories from "./EcommerceSUccessStories/EcommerceSuccessStories";
import EcommerceContactUs from "./EcommerceContactUs/EcommerceContactUs";
function ECommercePage() {
  return (
    <div>
      <ECommercePageCoverBox />
      <ECommercePageBoxForBoxAndText />
      <ECommerceSecondBoxWithIMGAndBox />
      <ECommercePageRedkiteWill />
      <EcommerceCustomerJourney />
      <EcommerceWhyRedkite />
      <EcommerceSuccessStories />
      <EcommerceContactUs />
    </div>
  );
}
export default ECommercePage;
