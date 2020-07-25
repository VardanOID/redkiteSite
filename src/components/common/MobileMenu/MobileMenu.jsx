import React from "react";
import styles from "./MobileMenu.module.scss";
import CloseMobileMenu from "../../../img/CloseMobileMenu.svg";
import MobileMenuItemsBox from "./MobileMenuItemsBox";
import { useLocation } from "react-router-dom";
import Facebook from "../../../img/Facebook.svg";
import Instagram from "../../../img/Instagram.svg";
import LogoWhite from "../../../img/LogoWhite.svg";
function MobileMenu({ show, showMobileMenu, navigation }) {
  const menuWrapperClass = show ? styles.menuWrapperClass : "";
  return (
    <div className={styles.MobileMenuBox}>
      <div
        className={`${styles.MobileMenu} ${menuWrapperClass}`}
        style={{
          backgroundImage:
            useLocation().pathname === "/"
              ? `linear-gradient( 180deg, black ,    #46386B )`
              : `linear-gradient( 180deg, white ,   white )`,
        }}
      >
        <div className={styles.MobileMenuFooterBox}>
          <div className={styles.MobileMenuFooterSubBox}>
            <div className={styles.MobileMenuFooterTitle}>Connect with Us:</div>
            <div className={styles.MobileMenuFooterSocial}>
              <div>
                <a href="https://www.facebook.com/redkiteyerevan/?ref=br_rs">
                  <img src={Facebook} alt="fb" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/redkiteyerevan/">
                  <img src={Instagram} alt="instagram" />
                </a>
              </div>
              <div className={styles.MobileMenuFooterSocialLogo}>
                <a href="/">
                  <img src={LogoWhite} alt="Logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <MobileMenuItemsBox
          navigation={navigation}
          showMobileMenu={showMobileMenu}
        />
        <div>
          <img
            src={CloseMobileMenu}
            alt="close"
            onClick={() => {
              showMobileMenu(false);
            }}
            className={styles.closeIcon}
          />
        </div>
      </div>
    </div>
  );
}

export default React.forwardRef(MobileMenu);
