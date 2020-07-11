import React from "react";
// import Icon_Checked1 from "../../../img/Icon_Checked1.svg";
// import Icon_Checked2 from "../../../img/Icon_Checked2.svg";
// import Icon_Checked3 from "../../../img/Icon_Checked3.svg";
// import Icon_Checked4 from "../../../img/Icon_Checked4.svg";
import ECommercePageRedkiteWillItems from "./ECommercePageRedkiteWillItems";
function ECommercePageRedkiteWillItemsBox({ redkiteWill }) {
  return (
    <div className="ecommerce-page-redkite-will-items-box">
      {!!redkiteWill &&
        redkiteWill.map((data) => {
          return <ECommercePageRedkiteWillItems {...data} />;
        })}
      {/* <ECommercePageRedkiteWillItems
        checkimg={Icon_Checked1}
        text="Design and Develop a breathtaking and extremely user-friendly e-commerce web site."
      />
      <ECommercePageRedkiteWillItems
        checkimg={Icon_Checked2}
        text="Build and configure a fully functional back end and analytics e-commerce suite."
      />
      <ECommercePageRedkiteWillItems
        checkimg={Icon_Checked3}
        text="Integrate all the necessary third-party solutions into the newly designed web site."
      />
      <ECommercePageRedkiteWillItems
        checkimg={Icon_Checked4}
        text="All this through powerful and extremely flexible BigCommerce engine "
      /> */}
    </div>
  );
}
export default ECommercePageRedkiteWillItemsBox;
