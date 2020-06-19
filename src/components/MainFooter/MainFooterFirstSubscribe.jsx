import React, { Component } from "react";
import Switch from "react-switch";
// function MainFooterFirstSubscribe() {
//   return (
//     <div className="main-footer-first-subscribe-box">
//   MainFooterFirstSubscribe
//     </div>
//   );
// }
// export default MainFooterFirstSubscribe;
export default class MainFooterFirstSubscribe extends Component {
  constructor() {
    super();
    this.state = { checked: true };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div className="main-footer-first-subscribe-box">
     
  <div className="main-footer-first-text">Subscribe to our newsletter:</div>
  
  <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    onColor="#fffff"
    // onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    activeBoxShadow="none"
    height={60}
    width={394}
    className="react-switch"
    id="material-switch"
 
  />
  </div>

    );
  }
}
