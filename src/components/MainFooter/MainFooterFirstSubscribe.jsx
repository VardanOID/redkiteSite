import React, { useState } from "react";
// import Switch from "react-switch";
import styles from "./MainFooter.module.scss";
import Loading from "../common/LoadingCircle";
// export default class MainFooterFirstSubscribe extends Component {
//   constructor() {
//     super();
//     this.state = { checked: true };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(checked) {
//     this.setState({ checked });
//   }

//   render() {
//     return (
//       <div className={styles["main-footer-first-subscribe-box"]}>
//         <div className={styles["main-footer-first-text"]}>
//           Subscribe to our newsletter:
//         </div>

//         <Switch
//           checked={this.state.checked}
//           onChange={this.handleChange}
//           onColor="#ffffff"
//           // onHandleColor="#2693e6"
//           handleDiameter={30}
//           uncheckedIcon={false}
//           checkedIcon={false}
//           // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
//           // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
//           activeBoxShadow="none"
//           height={60}
//           width={394}
//           className={styles["react-switch"]}
//           id="material-switch"
//         />
//       </div>
//     );
//   }
// }
function MainFooterFirstSubscribe() {
  // const thankYouMessage = "Thank you for your input!";
  // const errorMessage = "Something went wrong";
  const [email, setEmail] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [afterSendSuccess, setAfterSendSuccess] = useState("");
  const [afterSendError, setAfterSendError] = useState("");
  // const [isSent, setIsSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    setFormLoading(true);
    //TODO put real api
    fetch(`real link`, {
      method: "POST",
      body: JSON.stringify({ email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json(); // if you don't care about the data, you can leave this out
      })

      .then(() =>
        setAfterSendSuccess("Thank you. We will contact you shortly.")
      )

      .catch(() =>
        setAfterSendError("Something went wrong. Please try again later")
      )
      .finally(() => setFormLoading(false))
      .finally(() => setEmail(""));
  };

  return (
    <div className={styles["main-footer-first-subscribe-box"]}>
      <div className={styles["main-footer-first-text"]}>
        Subscribe to our newsletter:
      </div>

      <form>
        <div className={styles["main-footer-div"]}>
          <input
            autoComplete="off"
            required
            type="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles["main-footer-input"]}
          />
          <button
            type="submit"
            className={styles["main-footer-button"]}
            onClick={submit}
          >
            SUBSCRIBE
          </button>
          {formLoading && <Loading />}
        </div>
      </form>
      {/* {isSent} */}
      <div className={styles.afterSendSuccess}> {afterSendSuccess}</div>
      <div className={styles.afterSendError}> {afterSendError}</div>
    </div>
  );
}
export default MainFooterFirstSubscribe;
