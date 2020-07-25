import React from "react";

import styles from "./MainFooter.module.scss";
function MainFooterSocialIcons({ image, socialMediaLink }) {
  return (
    <div className={styles[""]}>
      <a href={socialMediaLink}>
        <img src={image} alt="" />
      </a>
    </div>
  );
}
export default MainFooterSocialIcons;
