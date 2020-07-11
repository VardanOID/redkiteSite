import React from "react";
import ClienstsSectionClients from "./ClientsSectionClients";

function ClientsSection({ client }) {
  return (
    <div className="clients-section-box">
      <div className="clients-section-text"> Our Clients</div>
      <div className="clients-section-clients-box">
        {!!client &&
          client.map((data) => {
            return <ClienstsSectionClients {...data} />;
          })}
      </div>
    </div>
  );
}
export default ClientsSection;
