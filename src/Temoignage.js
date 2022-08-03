import React from "react";
import katheenCarrier from "./images/KathleenCarrier.jpg";

export default function Temoignage()
{
  return (
    <div className="row temoignage">
      <h1 id="temoignages">Témoignages</h1>
      <hr />
      <div className="commentaire">
        <div className="row">
          <div className="col-3">
            <img src={katheenCarrier} alt="Élève: Kathleen Carrier" className="kathleenCarrier" />
            <h4>Kathleen Carrier</h4>
            <p>élève</p>
          </div>
          <div className="col-9">
            <span className="text"><br /><br />Passionnée, motivante et motivée! Changer d’enseignante et d’école de danse, ce n’est pas quelque chose de facile... Lors de ma première journée 
              avec Anka, j'ai tout de suite ressenti un accueil chaleureux, c'est comme si j'avais toujours été avec elle! Pas de gêne, pas de malaise, que du 
              plaisir!! Merci! Kathleen -xxx-</span>
          </div>
        </div>
      </div>
    </div>
  );
}