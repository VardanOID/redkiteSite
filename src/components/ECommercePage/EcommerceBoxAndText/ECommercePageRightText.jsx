import React from "react";

function ECommercePageRightText({ firstSectionText }) {
  return (
    <div
      className="ecommerce-page-right-text-box"
      dangerouslySetInnerHTML={{
        __html: !!firstSectionText && firstSectionText[2].text,
      }}
    />
  );
}
export default ECommercePageRightText;
