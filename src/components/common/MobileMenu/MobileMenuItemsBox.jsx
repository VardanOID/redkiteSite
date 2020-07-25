import React from "react";
import MobileMenuItems from "./MobileMenuItems";
import styles from "./MobileMenu.module.scss";
function MobileMenuItemsBox({ navigation, showMobileMenu }) {
  return (
    <div
      className={styles["main-header-items-box-box"]}
      onClick={() => {
        showMobileMenu(false);
      }}
    >
      {!!navigation &&
        navigation.map((works) => {
          return <MobileMenuItems key={works.itemLink} {...works} />;
        })}
    </div>
  );
}
export default MobileMenuItemsBox;
