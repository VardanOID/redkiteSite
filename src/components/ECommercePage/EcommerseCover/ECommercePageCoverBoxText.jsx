import React from "react";

function ECommercePageCoverBoxText({ firstSectionHeading, firstSectionText }) {
  return (
    <div className="ecommerce-page-cover-box-text-box">
      {!!firstSectionHeading && (
        <div className="ecommerce-page-cover-box-text-title">
          {firstSectionHeading}
        </div>
      )}
      {!!firstSectionText && firstSectionText[0].text && (
        <div
          className="ecommerce-page-cover-box-text-subtitle"
          dangerouslySetInnerHTML={{
            __html: firstSectionText[0].text,
          }}
        />
      )}
    </div>
  );
}
export default ECommercePageCoverBoxText;
