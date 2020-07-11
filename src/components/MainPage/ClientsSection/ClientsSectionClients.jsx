import React from "react";

function ClientsSectionClients(props) {
  return (
    <div className="clients-section-clients-items-box">
      <a href={props.clientLink}>
        <img
          src={props.image}
          alt={props.caption}
          className="clients-section-clients-items"
        />
      </a>
    </div>
  );
}
export default ClientsSectionClients;
