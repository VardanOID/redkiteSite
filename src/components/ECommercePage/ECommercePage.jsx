import React from "react";
import ECommercePageCoverBox from "./EcommerseCover/ECommercePageCoverBox";
import ECommercePageBoxForBoxAndText from "./EcommerceBoxAndText/ECommercePageBoxForBoxAndText";
import ECommerceSecondBoxWithIMGAndBox from "./EcommerceSecondBoxWithIMGAndBox/ECommerceSecondBoxWithIMGAndBox";
import ECommercePageRedkiteWill from "./EcommerceWill/ECommercePageRedkiteWill";
import EcommerceCustomerJourney from "./EcommerceCustomerJourney/EcommerceCustomerJourney";
function ECommercePage() {
  return (
    <div>
      <ECommercePageCoverBox />
      <ECommercePageBoxForBoxAndText />
      <ECommerceSecondBoxWithIMGAndBox />
      <ECommercePageRedkiteWill />
      <EcommerceCustomerJourney />
    </div>
  );
}
export default ECommercePage;
