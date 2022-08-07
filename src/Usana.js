import React from "react";

import "./Usana.css";

export default function Usana()
{
  return (
    <div className="Usana row" id="usana">
      <div className="col-12 col-sm-7">
        <h2>La santé par la nutrition Usana</h2>
        <ul>
          <li>Un kiosque de produits santés est disponible au studio!</li>
          <li>Barres, shakes, boissons d'énergie</li>
          <li>Visite de la boutique virtuelle!</li>
        </ul>
      </div>
      <div className="col-12 col-sm-5 mt-2">
        <a href="https://anka.usana.com/ux/dotcom/fre-CA/home" alt="" target="_blank" rel="noreferrer" >
          <button className="btn btn-primary button">
            VISITER LA BOUTIQUE
          </button>
        </a>
      </div>
      <div className="row">
        <a href="#mainHeader" className="backTo">Back to menu</a>
      </div>
    </div>
  );
}