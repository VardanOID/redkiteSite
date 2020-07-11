import React from "react";

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
    <div
      className={`get-in-touch-section-box-items-box ${getInTouchBG} getintouchBG`}
    >
      <img
        src={icon}
        alt={iconAlt}
        className="get-in-touch-section-box-items-icon"
      />
      <div
        className="get-in-touch-section-box-items-title"
        dangerouslySetInnerHTML={{ __html: heading }}
      />
      <div
        className="get-in-touch-section-box-items-text"
        dangerouslySetInnerHTML={{ __html: text }}
      />
      <div
        className="get-in-touch-section-box-items-info"
        dangerouslySetInnerHTML={{ __html: info }}
      />
      <div
        className="get-in-touch-section-box-items-info"
        dangerouslySetInnerHTML={{ __html: info1 }}
      />
      <div
        className="get-in-touch-section-box-items-info1"
        dangerouslySetInnerHTML={{ __html: info2 }}
      />
      <div className="get-in-touch-section-box-items-button-box">
        <input
          type="button"
          value={buttonValue}
          className="get-in-touch-section-box-items-button"
        />
      </div>
    </div>
  );
}
export default GetInTouchSectionBoxItems;
