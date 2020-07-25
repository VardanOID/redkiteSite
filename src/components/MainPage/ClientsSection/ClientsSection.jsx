import React from "react";
import ClienstsSectionClients from "./ClientsSectionClients";
import styles from "./ClientSection.module.scss";

function ClientsSection({ client }) {
  return (
    <div className={styles["clients-section-box"]}>
      <div className={styles["clients-section-text"]}> Our Clients</div>
      <div className={styles["clients-section-clients-box"]}>
        {!!client &&
          client.map((data) => {
            return <ClienstsSectionClients {...data} />;
          })}
      </div>
    </div>
  );
}
export default ClientsSection;
