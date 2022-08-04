import React from "react";
import Parcours from "./Parcours";

import "./propos.css";

export default function Propos()
{
  return (
    <div className="Propos row">
      <div className="title">
        <h2>À propos</h2>
      </div>
      <Parcours />
    </div>
  );
}