import React from "react";

const defaultMessage = "Something went wrong. Please try refreshing the page";

const ErrorWraaper = ({ type, message = defaultMessage }) => {
  const heightBasedStyle = type === "main" ? "errorElementHeight" : "";
  return <div className={`errorBoundary ${heightBasedStyle}`}>{message}</div>;
};

export default ErrorWraaper;
