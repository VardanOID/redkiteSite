import React from "react";
import ECommerceIMG from "../../../img/Ecommerce_img.png"
import ECommercePageCoverBoxText from "./ECommercePageCoverBoxText"
function ECommercePageCoverBox() {
  return <div>
  <img src = {ECommerceIMG} alt = "" className="ecommerce-page-cover-box"/>
  <ECommercePageCoverBoxText /></div>;
}
export default ECommercePageCoverBox;
