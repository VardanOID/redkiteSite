import React from "react";
// import attachedattachsvgrepocom from "../../../img/attached-attach-svgrepo-com.svg";
// import axios from "axios";

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
      <div className="ecommerce-contact-us-box">
        <div className="ecommerce-contact-us-title">
          Contact us to learn more about how Redkite can help your business
          achieve its every goal!
        </div>
        <form onSubmit={this.handelSubmit}>
          <div className="ecommerce-contact-us-form-structure">
            <div>
              <div className="ecommerce-contact-us-form-structure-name">
                <div>
                  <formGroup>
                    <label for="name">First Name</label> <br />
                    <input
                      type="text"
                      name="firstName"
                      onChange={this.handleChange}
                      className="form-name"
                    />
                  </formGroup>
                </div>
                <div>
                  <formGroup>
                    <label for="name">Last Name</label> <br />
                    <input
                      type="text"
                      name="lastName"
                      onChange={this.handleChange}
                      className="form-name"
                    />
                  </formGroup>
                </div>
              </div>

              <div className="ecommerce-contact-us-form-contact-and-email">
                <div>
                  <formGroup>
                    <label for="name">Contact Number</label> <br />
                    <input
                      type="text"
                      name="contactNumber"
                      onChange={this.handleChange}
                      className="form-number-and-email"
                    />
                  </formGroup>
                </div>
                <div>
                  <formGroup>
                    <label for="email">E-mail</label> <br />
                    <input
                      type="email"
                      name="email"
                      onChange={this.handleChange}
                      className="form-number-and-email"
                    />
                  </formGroup>
                </div>
              </div>
              <div className="ecommerce-contact-us-form-company-name">
                <formGroup>
                  <label for="email">Company Name</label> <br />
                  <input
                    type="email"
                    name="companyName"
                    onChange={this.handleChange}
                    className="form-company-name"
                  />
                </formGroup>
              </div>
              <div className="ecommerce-contact-us-form-NDA-and-atach">
            <div>
              <input type="checkbox" name="checked" />
              <label for="check">
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
          </div>
            </div>
            <div>
              <div className="ecommerce-contact-us-form-message">
                <formGroup>
                  <label for="message">What can we help you with?</label> <br />
                  <textarea
                    name="message"
                    onChange={this.handleChange}
                    className="form-message"
                  ></textarea>
                </formGroup>
              </div>
              
            </div>
            
          </div>

          {/* <div className="ecommerce-contact-us-form-NDA-and-atach">
            <div>
              <input type="checkbox" name="checked" />
              <label for="check">
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

          <button className="ecommerce-contact-us-form-button">Send</button>
        </form>
      </div>
    );
  }
}
export default EcommerceContactUs;
