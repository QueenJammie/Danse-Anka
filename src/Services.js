import React from "react";
import coursPriveAnka from "./images/coursPriveAnka.jpg";
import locationStudio from "./images/locationStudio.jpg";
import burlesqueAnka from "./images/burlesqueAnka.png";
import tabataOrientale from "./images/tabataOrientale.png";

import "./services.css";

export default function Services()
{
  return (
    <div className="container Services">
      <div className="row">
        <div className="servicesList col-6 m-5">
          <img src={coursPriveAnka} alt="Cours privé Anka" className="rounded-circle" width="250" height="250" />
          <h3>Cours privé</h3>
          <h4>Anka</h4>
          <p>ÉCRIS-MOI AVANT<br />DE T'INSCRIRE ICI, NOUS<br />REGARDERONS TES OBJECTIFS !</p>
          <hr />
          <p className="footer">NIVEAU: multi-niveaux<br />Avec Anka</p>
          <a href="/"><button className="btn btn-services">M'INSCRIRE</button></a>
        </div>
        <div className="servicesList col-6 m-5">
          <img src={locationStudio} alt="Louer le studio" className="rounded-circle" width="250" height="250" />
          <h3>LOCATION STUDIO TOURNAGE-SHOOTING-ENREGISTREMENT-CONFÉRENCE</h3>
          <p>12 À 22$ L'HEURE<br />ÉCRIS-MOI<br />OPTIONS DE TEMPS ET DE<br />RÉCURRENCES<br />POUR UN FORFAIT ADAPTÉ À TES<br />BESOINS!</p>
          <a href="mailto:info@danseanka.com"><button className="btn btn-services">info@danseanka.com</button></a>
        </div>
      </div>
      <div className="row">
        <div className="servicesList col-6 m-5">
          <img src={locationStudio} alt="Louer le studio pour une pratique" className="rounded-circle" width="250" height="250" />
          <h3>LOCATION STUDIO PRATIQUE</h3>
          <p>12 À 22$ L'HEURE<br />ÉCRIS-MOI: OPTIONS DE TEMPS<br />ET DE RÉCURRENCES<br />POUR UN FORFAIT ADAPTÉ À TES<br />BESOINS!</p>
          <a href="mailto:info@danseanka.com"><button className="btn btn-services">info@danseanka.com</button></a>
        </div>
        <div className="servicesList col-6 m-5">
          <img src={burlesqueAnka} alt="Festival Burlesque" className="rounded-circle" width="250" height="250" />
          <h3>FESTIVAL BURLESQUE<br />ATELIERS À VENIR</h3>
          <p>POSSIBILITÉ DE REJOINDRE LA TROUPE BURLESQUE AVEC SUNNY FIREFLY ET ANKA</p>
          <a href="mailto:info@danseanka.com"><button className="btn btn-services">info@danseanka.com</button></a>
        </div>
      </div>
      <div className="row">
        <div className="servicesList col-12">
          <img src={tabataOrientale} alt="Tabata Orientale" className="rounded-circle" width="250" height="250" />
          <h3>Série vidéo</h3>
          <h4 className="mt-4">TABATA ORIENTALE<br />(WORKOUT COURT ET INTENSE)<br />30$<br />-DISPONIBLE EN TOUT TEMPS-</h4>
          <hr />
          <p className="footer">NIVEAU: multi-niveaux<br />Avec Anka</p>
          <a href="/"><button className="btn btn-services">M'INSCRIRE</button></a>
        </div>
      </div>
    </div>
  );
}