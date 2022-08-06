import React from "react";
import coursPriveAnka from "./images/coursPriveAnka.jpg";
import locationStudio from "./images/locationStudio.jpg";
import burlesqueAnka from "./images/burlesqueAnka.png";
import tabataOrientale from "./images/tabataOrientale.png";

import "./services.css";

export default function Services()
{
  return (
    <div className="container Services" id="autresServices">
      <div className="row servicesRow">
        <div className="servicesList col-12 col-sm-6 mb-3">
          <img src={coursPriveAnka} alt="Cours privé Anka" className="rounded-circle" width="250" height="250" />
          <h3>Cours privé</h3>
          <h4>Anka</h4>
          <p><span className="noWeight">50$</span><br />ÉCRIS-MOI AVANT<br />DE T'INSCRIRE ICI, NOUS<br />REGARDERONS TES OBJECTIFS !</p>
          <hr />
          <p className="footer">NIVEAU: multi-niveaux<br />Avec Anka</p>
          <a href="https://studiodanseanka.thrivecart.com/cours-priv-avec-anka/" target="_blank" rel="noreferrer"><button className="btn btn-services">M'INSCRIRE</button></a>
        </div>
        <div className="servicesList col-12 col-sm-6 mb-3">
          <img src={locationStudio} alt="Louer le studio" className="rounded-circle" width="250" height="250" />
          <h3>Location studio Tournage-Shooting-Enregistrement-Conférence</h3>
          <p>12 À 22$ L'HEURE<br />ÉCRIS-MOI<br />OPTIONS DE TEMPS ET DE<br />RÉCURRENCES<br />POUR UN FORFAIT ADAPTÉ À TES<br />BESOINS!</p>
          <a href="mailto:info@danseanka.com"><button className="btn btn-services">info@danseanka.com</button></a>
        </div>
      </div>
      <div className="row servicesRow">
        <div className="servicesList col-12 col-sm-6 mb-3">
          <img src={locationStudio} alt="Louer le studio pour une pratique" className="rounded-circle" width="250" height="250" />
          <h3>Location studio Pratique</h3>
          <p>12 À 22$ L'HEURE<br />ÉCRIS-MOI: OPTIONS DE TEMPS<br />ET DE RÉCURRENCES<br />POUR UN FORFAIT ADAPTÉ À TES<br />BESOINS!</p>
          <a href="mailto:info@danseanka.com"><button className="btn btn-services">info@danseanka.com</button></a>
        </div>
        <div className="servicesList col-12 col-sm-6 mb-3">
          <img src={burlesqueAnka} alt="Festival Burlesque" className="rounded-circle" width="250" height="250" />
          <h3>Festival burlesque<br />Ateliers à venir</h3>
          <p>POSSIBILITÉ DE REJOINDRE LA <br />TROUPE BURLESQUE <br />AVEC SUNNY FIREFLY ET ANKA</p>
          <a href="mailto:info@danseanka.com"><button className="btn btn-services">info@danseanka.com</button></a>
        </div>
      </div>
      <div className="row servicesRowEnd">
        <div className="servicesList col-12 col-sm-12">
          <img src={tabataOrientale} alt="Tabata Orientale" className="rounded-circle" width="250" height="250" />
          <h3>Série vidéo</h3>
          <h4 className="mt-4">Tabata orientale<br />(Workout court et intense)<br />30$<br />-DISPONIBLE EN TOUT TEMPS-</h4>
          <hr />
          <p className="footer">NIVEAU: multi-niveaux<br />Avec Anka</p>
          <a href="https://studiodanseanka.thrivecart.com/srie-vido-4-tabata-workout-oriental/" target="_blank" rel="noreferrer"><button className="btn btn-services">M'INSCRIRE</button></a>
        </div>
        <div className="row">
          <a href="#mainHeader" className="backTo">Back to menu</a>
        </div>
      </div>
    </div>
  );
}