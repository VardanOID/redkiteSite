import React from "react";
import MainHeaderItem from "./MainHeaderItem";
import MainHeaderCallButton from "./MainHeaderCallButton";

function MainHeaderItemsBox() {
  return (
    <div className="main-header-items-box-box">
      <MainHeaderItem name="Solutions" />
      <MainHeaderItem name="Our Works" />
      <MainHeaderItem name="E-Commerce" />
      <MainHeaderItem name="Our Clients" />
      <MainHeaderItem name="FAQ" />
      <MainHeaderItem name="About US" />
      <MainHeaderItem name="Contact Us" />
      <MainHeaderCallButton />
    </div>
  );
}
export default MainHeaderItemsBox;
