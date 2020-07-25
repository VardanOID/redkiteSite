import React from "react";
import Styles from "./GetInTouchSection.module.scss";
function GetInTouchSectionBoxItems({
  icon,
  iconAlt,
  getInTouchBG,
  heading,
  text,
  info,
  info1,
  buttonValue,
  info2,
}) {
  return (
    <div className={Styles["getintouchBG"]}>
      <img
        src={icon}
        alt={iconAlt}
        className={Styles["get-in-touch-section-box-items-icon"]}
      />
      <div
        className={Styles["get-in-touch-section-box-items-title"]}
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div
        className={Styles["get-in-touch-section-box-items-text"]}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div
        className={Styles["get-in-touch-section-box-items-info"]}
        dangerouslySetInnerHTML={{ __html: info }}
      />
      <div
        className={Styles["get-in-touch-section-box-items-info"]}
        dangerouslySetInnerHTML={{ __html: info1 }}
      />
      <div
        className={Styles["get-in-touch-section-box-items-info1"]}
        dangerouslySetInnerHTML={{ __html: info2 }}
      />
      <div className={Styles["get-in-touch-section-box-items-button-box"]}>
        <input
          type="button"
          value={buttonValue}
          className={Styles["get-in-touch-section-box-items-button"]}
        />
      </div>
    </div>
  );
}
export default GetInTouchSectionBoxItems;
