import React from "react";
import tabataOrientale from "./images/tabataOrientale.png";

import "./Header.css";

export default function Header()
{
  return (
    <div className="Header">
      <div className="row header">
        <div className="col-5">
          <img src={tabataOrientale} alt="" className="mainAnkaimg" />
        </div>
        <div className="col-12 col-sm-5">
          <div className="presentation">
            <p className="text">"S'Épanouir, s'Exprimer, Être en santé, Ensemble!"</p>
            <div className="row">
              <div className="nameAnka">Anka</div>
              <span className="smaller"><em><strong>Anka D. Rivard</strong> / Propriétaire du Studio Danse Anka</em></span>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}