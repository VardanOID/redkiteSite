import React from "react";
import Styles from "./ContactUs.module.scss";
class EcommerceContactUs extends React.Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      companyName: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async handelSubmit(e) {
    e.preventDefaut();

    // const { firstName, lastName , contactNumber, email, companyName,  message} = this.state
    //
    // const form = await axios.post('api/form', {
    // firstName,
    // lastName,
    // contactNumber,
    // email,
    // companyName,
    // message
    // })
  }

  render() {
    function a(event) {
      if (event.target.files && event.target.files[0]) {
        /*Maximum allowed size in bytes
            5MB Example
            Change first operand(multiplier) for your needs*/
        const maxAllowedSize = 5 * 1024 * 1024;
        if (event.target.files[0].size > maxAllowedSize) {
          // Here you can ask your users to load correct file
          alert("File is too big!");
          event.target.value = "";
        }
      }
    }
    return (
      <div className={Styles["ecommerce-contact-us-box"]}>
        <div className={Styles["ecommerce-contact-us-title"]}>
          {this.props.fifthSectionHeading}
        </div>
        <form onSubmit={this.handelSubmit}>
          <div className={Styles["ecommerce-contact-us-form-structure"]}>
            <div>
              <div
                className={Styles["ecommerce-contact-us-form-structure-name"]}
              >
                <div>
                  <div>
                    <label htmlFor="name">First Name</label> <br />
                    <input
                      type="text"
                      name="firstName"
                      onChange={this.handleChange}
                      className={Styles["form-name"]}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="name">Last Name</label> <br />
                    <input
                      type="text"
                      name="lastName"
                      onChange={this.handleChange}
                      className={Styles["form-name"]}
                    />
                  </div>
                </div>
              </div>

              <div
                className={
                  Styles["ecommerce-contact-us-form-contact-and-email"]
                }
              >
                <div>
                  <div>
                    <label htmlFor="name">Contact Number</label> <br />
                    <input
                      type="text"
                      name="contactNumber"
                      onChange={this.handleChange}
                      className={Styles["form-number-and-email"]}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="email">E-mail</label> <br />
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      className={Styles["form-number-and-email"]}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles["ecommerce-contact-us-form-company-name"]}>
                <div>
                  <label htmlFor="email">Company Name</label> <br />
                  <input
                    type="email"
                    name="companyName"
                    onChange={this.handleChange}
                    className={Styles["form-company-name"]}
                  />
                </div>
              </div>
              <div
                className={Styles["ecommerce-contact-us-form-NDA-and-atach"]}
              >
                <div>
                  <input type="checkbox" name="checked" />
                  <label htmlFor="check">
                    Sign a mutual NDA before a conversation.<sup> ⓘ </sup>
                  </label>
                  <br></br>
                </div>
                <label className={Styles["attached-file"]}>
                  <div id={Styles["hide"]}>
                    <input type="file" id={Styles["file"]} onChange={a} />
                  </div>
                  <label className={Styles["attached-file-text"]}>
                    Attach a file (Max. 2 MB).
                  </label>
                </label>
              </div>
            </div>
            <div>
              <div className={Styles["ecommerce-contact-us-form-message"]}>
                <div>
                  <label htmlFor="message">What can we help you with?</label>{" "}
                  <br />
                  <textarea
                    name="message"
                    onChange={this.handleChange}
                    className={Styles["form-message"]}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="ecommerce-contact-us-form-NDA-and-atach">
            <div>
              <input type="checkbox" name="checked" />
              <label htmlFor="check">
                {" "}
                Sign a mutual NDA before a conversation.<sup> ⓘ </sup>
              </label>
              <br></br>
            </div>
            <label className="attached-file">
              <div id="hide">
                <input type="file" id="file" onChange={a} />
              </div>{" "}
              <label className="attached-file-text">
                Attach a file (Max. 2 MB).
              </label>
            </label>
          </div> */}

          <button className={Styles["ecommerce-contact-us-form-button"]}>
            Send
          </button>
        </form>
      </div>
    );
  }
}
export default EcommerceContactUs;
