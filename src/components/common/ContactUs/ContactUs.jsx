import React from "react";
import Styles from "./ContactUs.module.scss";
import InfoIcon from "../../../img/info-icon.svg";
import CloseIcon from "../../../img/close.jpg";
import LoadingCircle from "../../common/LoadingCircle";

const maxAllowedSize = 2;

const initialFormState = {
  firstName: "",
  lastName: "",
  contactNumber: "",
  email: "",
  companyName: "",
  message: "",
  nda: "",
  files: [],
  fileError: "",
};

class ContactUs extends React.Component {
  constructor() {
    super();

    this.state = {
      ...initialFormState,
      formLoading: false,
      afterSendSuccess: "",
      afterSendError: "",
    };
    this.attachFile = this.attachFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handelSubmit(e) {
    const formData = new FormData();
    formData.append("firstname", this.state.firstName);
    formData.append("lastName", this.state.lastName);
    formData.append("contactNumber", this.state.contactNumber);
    formData.append("email", this.state.email);
    formData.append("companyName", this.state.companyName);
    formData.append("message", this.state.message);
    formData.append("nda", this.state.nda);
    this.state.files.forEach((file) => {
      formData.append("files[]", file);
    });
    // TODO replace with real API endpoint
    this.setState({ formLoading: true });
    fetch("http://api.redkite.io/", {
      method: "POST",
      body: formData,
    })
      .then(() =>
        this.setState({
          afterSendSuccess: "Thank you. We will contact you shortly.",
        })
      )
      .catch(() =>
        this.setState({
          afterSendError: "Something went wrong. Please try again later",
        })
      )
      .finally(() => {
        this.setState({ ...initialFormState });
        document.getElementById("resetContactUsForm").click();
        this.setState({ formLoading: false });
      });
    e.preventDefault();
  }

  attachFile(event) {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif|\.xlsx|\.xls|\.doc|\.docx|\.pdf)$/i;
    const { files } = event.target;
    const filesArray = [...this.state.files];
    const fileNames = filesArray.map((file) => file.name);
    for (let i = 0; i < files.length; i++) {
      if (files[i].size / 1024 / 1024 > maxAllowedSize) {
        this.setState({ fileError: "file size exceeded 2 MB." });
      } else if (fileNames.includes(files[i].name)) {
        this.setState({
          fileError: `file with the name "${files[i].name}" already exists.`,
        });
      } else if (!files[i].name.match(allowedExtensions)) {
        this.setState({ fileError: `unsopported file type ${files[i].type}` });
      } else {
        filesArray.push(files[i]);
      }
    }
    this.setState({ files: [...filesArray] });
  }

  render() {
    return (
      <div className={Styles["ecommerce-contact-us-box"]}>
        <div className={Styles["ecommerce-contact-us-title"]}>
          {this.props.contactSectionHeading}
        </div>
        <form onSubmit={this.handelSubmit}>
          <div className={Styles["ecommerce-contact-us-form-structure"]}>
            <div>
              <div
                className={Styles["ecommerce-contact-us-form-structure-name"]}
              >
                <div>
                  <div>
                    <label htmlFor="firstName">
                      {`${this.props.contactSectionFields[0].label}*`}
                    </label>
                    <br />
                    <input
                      type="text"
                      name={this.props.contactSectionFields[0].inputName}
                      id="firstName"
                      onChange={this.handleChange}
                      className={Styles["form-name"]}
                      required={this.props.contactSectionFields[0].required}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="lastName">
                      {`${this.props.contactSectionFields[1].label}*`}
                    </label>
                    <br />
                    <input
                      type="text"
                      name={this.props.contactSectionFields[1].inputName}
                      id="lastName"
                      onChange={this.handleChange}
                      className={Styles["form-name"]}
                      required={this.props.contactSectionFields[1].required}
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
                    <label htmlFor="contactNumber">
                      {`${this.props.contactSectionFields[2].label}*`}
                    </label>
                    <br />
                    <input
                      type="tel"
                      name={this.props.contactSectionFields[2].inputName}
                      id="contactNumber"
                      onChange={this.handleChange}
                      className={Styles["form-number-and-email"]}
                      required={this.props.contactSectionFields[2].required}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="email">
                      {`${this.props.contactSectionFields[3].label}*`}
                    </label>
                    <br />
                    <input
                      type="email"
                      name={this.props.contactSectionFields[3].inputName}
                      id="email"
                      onChange={this.handleChange}
                      className={Styles["form-number-and-email"]}
                      required={this.props.contactSectionFields[3].required}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles["ecommerce-contact-us-form-company-name"]}>
                <div>
                  <label htmlFor="companyName">
                    {`${this.props.contactSectionFields[4].label}*`}
                  </label>
                  <br />
                  <input
                    type="text"
                    name={this.props.contactSectionFields[4].inputName}
                    id="companyName"
                    onChange={this.handleChange}
                    className={Styles["form-company-name"]}
                    required={this.props.contactSectionFields[4].required}
                  />
                </div>
              </div>
              <div className={Styles.showInMobile}>
                <div className={Styles["ecommerce-contact-us-form-message"]}>
                  <div>
                    <label htmlFor="message">
                      {this.props.contactSectionFields[5].label}
                    </label>
                    <br />
                    <textarea
                      name={this.props.contactSectionFields[5].inputName}
                      id="message"
                      onChange={this.handleChange}
                      className={Styles["form-message"]}
                      required={this.props.contactSectionFields[5].required}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div
                className={Styles["ecommerce-contact-us-form-NDA-and-atach"]}
              >
                <div className={Styles["form-group"]}>
                  <input
                    type="checkbox"
                    name={this.props.contactSectionFields[6].inputName}
                    defaultChecked={this.state.nda}
                    id="html"
                    required={this.props.contactSectionFields[6].required}
                  />
                  <label
                    htmlFor="html"
                    onClick={() => this.setState({ nda: !this.state.nda })}
                  >
                    <span className={Styles.ndaStyle}>
                      {this.props.contactSectionFields[6].label}
                    </span>
                    <img
                      src={InfoIcon}
                      alt=""
                      className={Styles["info-icon"]}
                    />
                  </label>
                  <br></br>
                </div>
                <div>
                  <label
                    htmlFor={Styles["file"]}
                    className={Styles["attached-file"]}
                  >
                    <div id={Styles["hide"]}>
                      <input
                        type="file"
                        id="contactUsFileUpload"
                        onChange={this.attachFile}
                        multiple
                        accept=".pdf,.doc,.docx,.xls,.xlsx,image/*"
                        name={this.props.contactSectionFields[7].inputName}
                        required={this.props.contactSectionFields[7].required}
                      />
                    </div>
                    <label
                      htmlFor="contactUsFileUpload"
                      className={Styles["attached-file-text"]}
                    >
                      <span className={Styles.attachStyle}>
                        {" "}
                        {this.props.contactSectionFields[7].label}
                      </span>
                    </label>
                  </label>
                  <div className={Styles.filesContainer}>
                    {this.state.files.map((file, fileIndex) => (
                      <p key={file.name} className={Styles.fileDisplayWrapper}>
                        <span className={Styles.fileName}>{file.name}</span>
                        <span className={Styles.removeFile}>
                          <img
                            src={CloseIcon}
                            alt="close icon"
                            width="30px"
                            onClick={() => {
                              let newFiles = [...this.state.files];
                              newFiles.splice(fileIndex, 1);
                              this.setState({ files: newFiles });
                              document.getElementById(
                                "contactUsFileUpload"
                              ).value = "";
                            }}
                          />
                        </span>
                      </p>
                    ))}
                    <div className={Styles.fileErrorContainer}>
                      {this.state.fileError}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.hideInMobile}>
              <div className={Styles["ecommerce-contact-us-form-message"]}>
                <div>
                  <label htmlFor="message">
                    {this.props.contactSectionFields[5].label}
                  </label>
                  <br />
                  <textarea
                    name="message"
                    id="message"
                    onChange={this.handleChange}
                    className={Styles["form-message"]}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className={Styles.formActionButtons}>
            <button
              className={Styles["ecommerce-contact-us-form-button"]}
              disabled={this.state.formLoading}
            >
              Send
            </button>
            {!!this.state.formLoading && <LoadingCircle />}
            <input type="reset" hidden id="resetContactUsForm" />
          </div>
          {!!this.state.afterSendSuccess && (
            <div className={Styles.afterSendSuccess}>
              {this.state.afterSendSuccess}
            </div>
          )}
          {!!this.state.afterSendError && (
            <div className={Styles.afterSendError}>
              {this.state.afterSendError}
            </div>
          )}
        </form>
      </div>
    );
  }
}
export default ContactUs;
