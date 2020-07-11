import React from "react";
// import Ecommerce_BgSucess from "../../../img/Ecommerce_BgSucess.png";
// import Ecommerce_BgSucess1 from "../../../img/Ecommerce_BgSucess1.png";
import EcommerceSuccessStoriesBox from "./EcommerceSuccessStoriesBox";
import EcommerceSuccessStoriesButton from "./EcommerceSuccessStoriesButton";
function EcommerceSuccessStories({ fourthSectionContent }) {
  return (
    <div className="ecommerce-success-stories-box">
      <div className="ecommerce-success-stories-title">
        Customer Success Stories
      </div>
      <div className="test">
        {!!fourthSectionContent &&
          fourthSectionContent.map((data) => {
            return <EcommerceSuccessStoriesBox {...data} />;
          })}
      </div>
      {/* <EcommerceSuccessStoriesBox
        ecommercePic={Ecommerce_BgSucess}
        title="title 1"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing it, sed do eiusmod tem- porincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, d quis nostrud exercitation ullamco laboris nisi.“Lorem ipsum dolor sit amet, s consectetur adipiscing it, sed do eiusmod temporincididunt ut labore et dois lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulls amco laboris nisi."
        value="READ MORE"
      />
      <EcommerceSuccessStoriesBox
        ecommercePic={Ecommerce_BgSucess1}
        title="title 2"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing it, sed do eiusmod tem- porincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, d quis nostrud exercitation ullamco laboris nisi.“Lorem ipsum dolor sit amet, s consectetur adipiscing it, sed do eiusmod temporincididunt ut labore et dois lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulls amco laboris nisi."
        value="READ MORE"
      />
      <EcommerceSuccessStoriesBox
        ecommercePic={Ecommerce_BgSucess1}
        title="title 3"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing it, sed do eiusmod tem- porincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, d quis nostrud exercitation ullamco laboris nisi.“Lorem ipsum dolor sit amet, s consectetur adipiscing it, sed do eiusmod temporincididunt ut labore et dois lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulls amco laboris nisi."
        value="READ MORE"
      />
      <EcommerceSuccessStoriesBox
        ecommercePic={Ecommerce_BgSucess1}
        title="title 4"
        text="“Lorem ipsum dolor sit amet, consectetur adipiscing it, sed do eiusmod tem- porincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, d quis nostrud exercitation ullamco laboris nisi.“Lorem ipsum dolor sit amet, s consectetur adipiscing it, sed do eiusmod temporincididunt ut labore et dois lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulls amco laboris nisi."
        value="READ MORE"
      /> */}
      <EcommerceSuccessStoriesButton />
    </div>
  );
}
export default EcommerceSuccessStories;
