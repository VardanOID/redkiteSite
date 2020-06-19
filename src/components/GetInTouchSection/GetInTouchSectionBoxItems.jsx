import React from "react";

function GetInTouchSectionBoxItems({
  icon,
  iconAlt,
  getInTouchBG,
  title,
  text,
  info,
  info1,
  buttonValue,
  info2
}) {
  return (
    <div className={`get-in-touch-section-box-items-box ${getInTouchBG}`}>
      <img
        src={icon}
        alt={iconAlt}
        className="get-in-touch-section-box-items-icon"
      />
      <div className="get-in-touch-section-box-items-title">{title}</div>
      <div className="get-in-touch-section-box-items-text">{text}</div>
      <div className="get-in-touch-section-box-items-info">{info}</div>
      <div className="get-in-touch-section-box-items-info">{info1}</div>
      <div className="get-in-touch-section-box-items-info1">{info2}</div>
      <div  className="get-in-touch-section-box-items-button-box">
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
