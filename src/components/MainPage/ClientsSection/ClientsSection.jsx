import React from "react";
import ClienstsSectionClients from "./ClientsSectionClients"
import Client1 from "../../../img/1@2x.png"
import Client2 from "../../../img/2@2x.png"
import Client3 from "../../../img/3@2x.png"
import Client4 from "../../../img/4@2x.png"
import Client5 from "../../../img/5@2x.png"
import Client6 from "../../../img/6@2x.png"
import Client7 from "../../../img/7@2x.png"
import Client8 from "../../../img/8@2x.png"
import Client9 from "../../../img/9@2x.png"
import Client10 from "../../../img/10@2x.png"


function ClientsSection() {
  return (
    <div className="clients-section-box">
      
     <div className="clients-section-text"> Our Clients</div>
     <div className="clients-section-clients-box">
     <ClienstsSectionClients IMGname={Client1} caption="Carson Dellosa"/>
     <ClienstsSectionClients IMGname={Client2} caption="verfjob"/>
     <ClienstsSectionClients IMGname={Client3} caption="galfes"/>
     <ClienstsSectionClients IMGname={Client4} caption="Think shift"/>
     <ClienstsSectionClients IMGname={Client5} caption="Inno Seal"/>
     <ClienstsSectionClients IMGname={Client6} caption="Zealoq"/>
     <ClienstsSectionClients IMGname={Client7} caption="TMF"/>
     <ClienstsSectionClients IMGname={Client8} caption="textslice"/>
     <ClienstsSectionClients IMGname={Client9} caption="ITO"/>
     <ClienstsSectionClients IMGname={Client10} caption="Bio Pic"/>
     </div>
      
    </div>
  );
}
export default ClientsSection;
