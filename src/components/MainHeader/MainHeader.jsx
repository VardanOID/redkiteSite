import React, { useState, useEffect } from "react";
import MainHeaderLogo from "./MainHeaderLogo";
import MainHeaderItemsBox from "./MainHeaderItemsBox";
import { useLocation } from "react-router-dom";
import useWindowScrollPosition from "@rehooks/window-scroll-position";
// import "../../styles/_index.scss";
import Icon_Menu_white from "../../img/IconMenu.svg";
import Icon_Menu_Black from "../../img/Icon_Menu_Black.svg";
import styles from "./MainHeader.module.scss";
import MobileMenu from "../common/MobileMenu";
const scrollBreakPoint = 10;
const headerBgClass = "transparent";

function MainHeader() {
  const [apiData, setApiData] = useState({});

  async function fetchData() {
    const res = await fetch("http://api.redkite.io/menu.json");
    res.json().then((res) => setApiData(res));
  }
  useEffect(() => {
    fetchData();
  }, []);

  const { pathname } = useLocation();
  const headerClass = pathname === "/" ? "homeHeader" : "internalHeader";
  const [bgClass, setBgClass] = useState(headerBgClass);
  const [mobileMenu, showMobileMenu] = useState(false);
  // const [logo, hideLogo] = useState(true);
  let position = useWindowScrollPosition();

  useEffect(() => {
    if (pathname === "/") {
      setBgClass(position.y > scrollBreakPoint ? "" : styles[headerBgClass]);
    } else {
      setBgClass("");
    }
  }, [pathname, position.y]);

  return (
    <div className={`mainHeaderBox ${styles[headerClass]} ${bgClass}`}>
      <MainHeaderLogo
        logoWhite={apiData.logoWhite}
        logoBlack={apiData.logoBlack}
        // hide={logo}
        // hideLogo={hideLogo}
      />

      <MainHeaderItemsBox
        navigation={apiData.navigation}
        callIconWhite={apiData.callIconWhite}
        callIconBlack={apiData.callIconBlack}
      />

      <div>
        <img
          src={
            useLocation().pathname === "/" ? Icon_Menu_white : Icon_Menu_Black
          }
          alt=""
          className={styles.burgerMenu}
          onClick={() => {
            showMobileMenu(!mobileMenu);
            // hideLogo(!logo);
          }}
        />
      </div>
      <MobileMenu
        show={mobileMenu}
        showMobileMenu={showMobileMenu}
        navigation={apiData.navigation}
      />
    </div>
  );
}
export default MainHeader;
