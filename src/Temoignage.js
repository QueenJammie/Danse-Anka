import React from "react";
import caractereCommentaire from "./images/caractereCommentaire.png";
import katheenCarrier from "./images/KathleenCarrier.jpg";
import marieJoseeDunn from "./images/MarieJoseeDunn.jpg";
import sandrineRoy from "./images/SandrineRoy.jpg";
import hélèneDuboisLaplante from "./images/HélèneDuboisLaplante.jpg";

import "./Temoignage.css";

export default function Temoignage()
{
  return (
    <div className="temoignage">
      <div className="row">
        <h1 id="temoignages">Témoignages</h1>
        <hr />
      </div>
      <div className="commentaire mb-2">
        <div className="row">
          <div className="col-12 col-sm-3 profilImage">
            <img src={katheenCarrier} alt="Élève: Kathleen Carrier" className="profilImage" />
            <h4>Kathleen Carrier</h4>
            <p>élève</p>
          </div>
          <div className="col-12 col-sm-9">
            <img src={caractereCommentaire} alt="" className="caractereCommentaire" />
            <span className="text"><br /><br />Passionnée, motivante et motivée! Changer d’enseignante et d’école de danse, ce n’est pas quelque chose de facile... Lors de ma première journée 
              avec Anka, j'ai tout de suite ressenti un accueil chaleureux, c'est comme si j'avais toujours été avec elle! Pas de gêne, pas de malaise, que du 
              plaisir!! Merci! Kathleen -xxx-</span>
          </div>
        </div>
      </div>
      <div className="commentaire mb-2">
        <div className="row">
          <div className="col-12 col-sm-3 profilImage">
            <img src={marieJoseeDunn} alt="Élève: Marie-Josée Dunn" />
            <h4>Marie-Josée Dunn</h4>
            <p>élève</p>
          </div>
          <div className="col-12 col-sm-9">
            <img src={caractereCommentaire} alt="" className="caractereCommentaire" />
            <span className="text"><br /><br />Définitivement, la meilleure école de danse ! 😊 Des professeurs et une propriétaire nous partageant 
            leur passion contagieuse pour la danse.💃 On se sent accueilli et libre d'être soi-même! C'est vraiment un endroit où j'ai pu m'épanouir 
            comme personne. 😊 C'est une école avec une superbe ambiance, où l'on peut partager et s'amuser. Bref, je recommande c'est certain 
            n'hésitez même pas je vous le dis!!🤗😁</span>
          </div>
        </div>
      </div>
      <div className="commentaire mb-2">
        <div className="row">
          <div className="col-12 col-sm-3 profilImage">
            <img src={sandrineRoy} alt="Élève: Sandrine Roy" className="profilImage" />
            <h4>Sandrine Roy</h4>
            <p>élève</p>
          </div>
          <div className="col-12 col-sm-9">
            <img src={caractereCommentaire} alt="" className="caractereCommentaire" />
            <span className="text"><br /><br />Je suis des cours de baladi avec Danse Anka depuis trois ans. J'ai tout de suite adopté l'ambiance 
            chaleureuse et la flexibilité des cours. Avec la danse, chaque semaine, Anka augmente de plus en plus mon estime de moi et me transmet 
            son énergie débordante, alors qu'avant, je me considérais comme une personne plus réservée. On peut apprendre sans jugement, ni 
            critique et avec plaisir ! Merci !</span>
          </div>
        </div>
      </div>
      <div className="commentaire mb-2">
        <div className="row">
          <div className="col-12 col-sm-3 profilImage">
            <img src={hélèneDuboisLaplante} alt="Élève: Hélène Dubois Laplante" className="mt-5 profilImage" />
            <h4>Sandrine Roy</h4>
            <p>élève</p>
          </div>
          <div className="col-12 col-sm-9">
            <img src={caractereCommentaire} alt="" className="caractereCommentaire" />
            <span className="text"><br /><br />Le studio danse Anka est unique en son genre, car on peut y apprendre plus de trois styles de danse 
            (danse orientale Baladi, danse gitane, Bollywood) à un niveau d’expertise, et de passion, élevé. Une chance rare, comme si on était à 
            New York!<br /><br />De la musique variée et entraînante, des chorégraphies absolument magnifiques et une communauté de danse bien 
            vivante, on y trouve son compte si on cherche à mettre un peu ou beaucoup de danse dans notre vie! J’invite tout le monde à l’essayer!</span>
          </div>
        </div>
      </div>
    </div>
  );
}