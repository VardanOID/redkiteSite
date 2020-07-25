import React from "react";
import styles from "./ClientSection.module.scss";

function ClientsSectionClients(props) {
  return (
    <div className={styles["clients-section-clients-items-box"]}>
      <a href={props.clientLink}>
        <img
          src={props.image}
          alt={props.caption}
          className={styles["clients-section-clients-items"]}
        />
      </a>
    </div>
  );
}
export default ClientsSectionClients;
