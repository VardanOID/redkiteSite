import React from "react";
import { useSelector } from "react-redux";
import LoadingIcon from "./loading2x.gif";
import styles from "./Loading.module.scss";

const Loading = () => {
  const loading = useSelector((store) => store.loading);
  if (!loading) {
    return null;
  }

  return (
    <div className={styles.loadingAnimation}>
      <img src={LoadingIcon} alt="RedKite loading animation" />
    </div>
  );
};

export default Loading;
