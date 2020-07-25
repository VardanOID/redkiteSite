import React, { useEffect, useState } from "react";
// import ECommercePageCoverBox from "./EcommerseCover/ECommercePageCoverBox";
// import ECommercePageBoxForBoxAndText from "./EcommerceBoxAndText/ECommercePageBoxForBoxAndText";
// import ECommerceSecondBoxWithIMGAndBox from "./EcommerceSecondBoxWithIMGAndBox/ECommerceSecondBoxWithIMGAndBox";
// import ECommercePageRedkiteWill from "./EcommerceWill/ECommercePageRedkiteWill";
// import EcommerceCustomerJourney from "./EcommerceCustomerJourney/EcommerceCustomerJourney";
// import EcommerceWhyRedkite from "./EcommerceWhyRedkite/EcommerceWhyRedkite";
// import EcommerceSuccessStories from "./EcommerceSUccessStories/EcommerceSuccessStories";
// import EcommerceContactUs from "./EcommerceContactUs/EcommerceContactUs";

import ECommercePageCoverBox from "../common/Cover";
import ECommercePageBoxForBoxAndText from "../common/RightTextAndLeftBoxWithButtons";
import ECommerceSecondBoxWithIMGAndBox from "../common/IMGWithRightBox";
import ECommercePageRedkiteWill from "../common/FeaturesList";
import EcommerceCustomerJourney from "../common/GradientNumbersList";
import EcommerceWhyRedkite from "../common/LargIMGWithRightBox";
import EcommerceSuccessStories from "../common/LeftAndRIghtSections";
import EcommerceContactUs from "../common/ContactUs";
function ECommercePage() {
  const [hasError, setErrors] = useState(false);
  const [apiData, setApiData] = useState({});

  async function fetchData() {
    const res = await fetch(
      "https://cors-anywhere.herokuapp.com/http://php-mysql-stack-dnifq.run-eu-central1.goorm.io/index.php?p=internalpages.json"
      // "https://cors-anywhere.herokuapp.com/http://php-mysql-stack-dnifq.run-eu-central1.goorm.io/index.php?p=internalpages.json"
    );
    res
      .json()
      .then((res) => setApiData(res))
      .catch((err) => setErrors(err));
  }
  useEffect(() => {
    fetchData();
  }, []);

  // console.log(apiData.firstSectionHeading);
  console.log(apiData);
  console.log(apiData.secondSection);
  console.log(hasError);
  console.log(apiData.fourthSectionContent);
  return (
    <div>
      <ECommercePageCoverBox
        firstSectionHeading={apiData.firstSectionHeading}
        firstSectionText={apiData.firstSectionText}
      />
      <ECommercePageBoxForBoxAndText
        firstSectionText={apiData.firstSectionText}
      />
      <ECommerceSecondBoxWithIMGAndBox
        firstSectionText={apiData.firstSectionText}
      />
      <ECommercePageRedkiteWill redkiteWill={apiData.redkiteWill} />

      {/* {!!apiData.secondSection && ( */}
      <EcommerceCustomerJourney customerJourney={apiData.customerJourney} />
      {/* )} */}
      <EcommerceWhyRedkite
        thirdSectionHeading={apiData.thirdSectionHeading}
        thirdSectionParagraph={apiData.thirdSectionParagraph}
        thirdSectionButton={apiData.thirdSectionButton}
      />
      <EcommerceSuccessStories
        fourthSectionContent={apiData.fourthSectionContent}
      />
      <EcommerceContactUs
        fifthSectionHeading={apiData.fifthSectionHeading}
        fifthSectionFields={apiData.fifthSectionFields}
      />
    </div>
  );
}
export default ECommercePage;
