import React from "react";



function ClientsSectionClients(props) {
  return (
    <div className="clients-section-clients-items-box">
      <img src={props.IMGname} alt={props.caption} className="clients-section-clients-items"/>
    </div>
  );
}
export default ClientsSectionClients;
