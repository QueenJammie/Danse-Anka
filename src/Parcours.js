import React from "react";
import AnkaParcoursTop from "./images/AnkaParcours.png";
import AnkaParcoursFormations from "./images/AnkaParcoursFormations.png";

import "./Parcours.css";

export default function Parcours()
{
  return (
    <div className="Parcours">
      <div className="row">
        <div className="col-12 col-sm-7">
          <h3 className="ms-3" id="parcours">Le parcours artistique de Anka</h3>
        </div>
      </div>
      <div className="row ankaParcoursTopBorder">
        <div className="col-12 col-sm-5">
          <img src={AnkaParcoursTop} alt="Anka" className="ankaParcoursTop" />
        </div>
        <div className="col-12 col-sm-7">
          <p className="text">Anka est une artiste multidisciplinaire audacieuse, fantaisiste et expressive. La culture orientale lui a fait découvrir une foule de 
            danses dont la danse orientale Baladi, la danse tzigane (Rom), le bollywood, le Bhangra et plus dernièrement le Street Shaabi. 
            Enseignante en danse depuis 2005, sa mission est de rendre les cours amusants autant que formateurs. Elle a organisé avec sa troupe de 
            multiples spectacles en salles, dans les festivals, corporatif et privés et chaque fois, c’est un voyage à travers le temps, les genres 
            et les émotions!<br />
            Anka poursuit sa formation en continue pour toujours enrichir davantage son langage artistique. La santé et le bien-être lui tiennent 
            tout autant à cœur, c’est pourquoi la posture et la manière dont les mouvements sont exécutés sont au cœur de son enseignement.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 mt-3">
          <h3 className="ms-3">Formations et réalisations</h3>
        </div>
      </div>
        <div className="row">
          <div className="col-12 col-sm-7 text">
            <ul>
              <li className="circle">Danse orientale (Baladi): camps, formations intensives et privées depuis 2003</li>
              <li className="circle">Danse Tzigane (Rom): formations intensives et privées depuis 2005</li>
              <li className="circle">Danse Bollywood et Bhangra: formations intensives et privées depuis 2007</li>
              <li className="text">En plus de faire de nombreuses performances en solo pour des contrats depuis 2005 (Privés, corporatifs, spectacles, ateliers), elle 
                dirige la troupe professionnelle à travers les événements festifs. Des spectacles-théâtres bien ficelés ont également été produits en 
                salle par Anka, permettant aux élèves de réaliser des défis grandioses et valorisants.</li>
            </ul>
          </div>
          <div className="col-12 col-sm-5 AnkaParcoursBottom">
            <img src={AnkaParcoursFormations} alt="" />
          </div>
        </div>
        <div className="row">
          <a href="#mainHeader" className="backTo">Back to menu</a>
        </div>
      </div>
  );
}