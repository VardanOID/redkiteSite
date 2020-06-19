import React from "react";
const date = new Date();
const year = date.getFullYear();
function MainFooterSecond() {
  return (
    <div className="main-footer-second-box">
      <div className="all-rights-reserved">
        © {year} Redkite.io. All Rights Reserved.
      </div>
      <div className="policy">Privacy Policy</div>
      <div className="terms">Terms Of Use</div>
    </div>
  );
}
export default MainFooterSecond;
