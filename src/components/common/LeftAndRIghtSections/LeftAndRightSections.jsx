import React, { useState } from "react";
import LeftAndRightSectionsBox from "./LeftAndRightSectionsBox";
import LeftAndRightSectionsMainButton from "./LeftAndRightSectionsMainButton";
import Styles from "./LeftAndRightSections.module.scss";
function LeftAndRightSections({
  customerCasesSectionContent,
  customerCasesSectionButton,
}) {
  const mainContent = customerCasesSectionContent.slice(0, 1);
  const restContent = customerCasesSectionContent.slice(1);
  console.log(mainContent);
  console.log(restContent);
  const [isShown, setShow] = useState(false);

  return (
    <div className={Styles["ecommerce-success-stories-box"]}>
      <div className={Styles["ecommerce-success-stories-title"]}>
        Customer Success Stories
      </div>
      <div className={Styles["test"]}>
        {!!mainContent &&
          mainContent.map((data) => {
            return <LeftAndRightSectionsBox key={data.heading} {...data} />;
          })}

        {!!restContent &&
          isShown &&
          restContent.map((data) => {
            return <LeftAndRightSectionsBox key={data.heading} {...data} />;
          })}
      </div>

      <LeftAndRightSectionsMainButton
        customerCasesSectionButton={customerCasesSectionButton}
        setShow={setShow}
        isShown={isShown}
      />
    </div>
  );
}
export default LeftAndRightSections;
