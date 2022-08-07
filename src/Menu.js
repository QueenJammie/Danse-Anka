import React from "react";
import "./menu.css";

export default function Menu()
{
  return (
    <div className="Menu">
      <ul>
        <li><a href="/" className="menuTitle">Accueil</a></li>
        <li><a href="#sessionEte">Session d'été</a></li>
        <li><a href="#autresServices">Autres services</a></li>
        <li><a href="#temoignages">Témoignages</a></li>
        <li><a href="#usana">Usana</a></li>
        <li><a href="#parcours">À propos</a></li>
        <li><a href="#Contact">Contacter</a></li>
      </ul>
    </div>
  )
}