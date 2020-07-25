import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../img/LogoWhite.svg";
import styles from "./MainFooter.module.scss";
import MainFooterSocialIcons from "./MainFooterSocialIcons";
function MainFooterFirstContact({ socialMedia }) {
  return (
    <div>
      <div className={styles["main-footer-first-text-connect"]}>
        Connect with Us:
      </div>
      <div className={styles["contact-box"]}>
        {!!socialMedia &&
          socialMedia.map((data) => {
            return <MainFooterSocialIcons key={data.image} {...data} />;
          })}
        <Link to="/">
          <img
            src={LogoWhite}
            alt="RedKite Website Logo"
            className={styles["main-footer-redkite-logo-img"]}
          />
        </Link>
      </div>
    </div>
  );
}
export default MainFooterFirstContact;
