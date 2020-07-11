import React from "react";

function ECommercePageBoxWithButtons({ firstSectionText }) {
  return (
    <div className="ecommerce-page-box-with-buttons-box">
      <div className="ecommerce-page-box-with-buttons-subbox">
        <div
          className="ecommerce-page-box-text"
          dangerouslySetInnerHTML={{
            __html: !!firstSectionText && firstSectionText[1].text,
          }}
        />

        <div className="ecommerce-page-buttons-box">
          <button className="ecommerce-page-buttons">WHY REDKITE</button>
          <button className="ecommerce-page-buttons">READ MORE</button>
        </div>
      </div>
    </div>
  );
}
export default ECommercePageBoxWithButtons;
