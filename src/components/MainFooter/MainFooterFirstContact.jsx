import React from "react";
import LogoWhite from "../../img/LogoWhite.svg";
import Facebook from "../../img/Facebook.svg";
import Instagram from "../../img/Instagram.svg";
function MainFooterFirstContact() {
  return (
    <div className="main-footer-first-contact-box">
 <div className="main-footer-first-text">Connect with Us:</div>
 <div className="contact-box">
   <img src={Facebook} alt="Fb" className="contact-fb"/>
   <img src={Instagram} alt="instagram" className="contact-insta" />
   <img src={LogoWhite} alt="logo" className="contact-redkite-white"/>
 </div>
    </div>
  );
}
export default MainFooterFirstContact;
