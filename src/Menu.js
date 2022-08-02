import React from "react";
import "./menu.css";

export default function Menu()
{
  return (
    <div className="Menu">
      <ul>
        <li><a href="/" className="menuTitle">Acceuil</a></li>
        <li><a href="#sessionEte">Session d'été</a></li>
        <li><a href="#autresServices">Autres services</a></li>
        <li><a href="#temoignages">Témoignages</a></li>
      </ul>
    </div>
  )
}