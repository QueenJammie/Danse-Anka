import React from "react";
import Parcours from "./Parcours";

import "./propos.css";

export default function Propos()
{
  return (
    <div className="Propos">
      <div className="title row">
        <h2>À propos</h2>
      </div>
      <div className="parcours">
        <Parcours />
      </div>
    </div>
  );
}