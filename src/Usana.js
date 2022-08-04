import React from "react";

export default function Usana()
{
  return (
    <div className="Usana row" id="usana">
      <div className="col-7">
        <h2>La santé par la nutrition Usana</h2>
        <ul>
          <li>Un kiosque de produits santés est disponible au studio!</li>
          <li>Barres, shakes, boissons d'énergie</li>
          <li>Visite de la boutique virtuelle!</li>
        </ul>
      </div>
      <div className="col-5">
        <a href="https://anka.usana.com/ux/dotcom/fre-CA/home" alt="" target="_blank" rel="noreferrer" >
          <button className="btn btn-primary button">
            VISITER LA BOUTIQUE
          </button>
        </a>
      </div>
    </div>
  );
}