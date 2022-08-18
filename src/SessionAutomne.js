import React from "react";
import horaireSessionAutomne from "./images/horaireSessionAutomne.png";
import "./sessionAutomne.css";

export default function SessionAutomne()
{
  return (
    <div className="sessionAutomne">
      <div className="sessionForNow">
        <div className="nextEvents">
          <h2 id="sessionAutomne" className="mb-4">2 sessions Automne 2022</h2>
          <h3 className="mb-4">#1: 7 semaines du 12 septembre au 29 octobre</h3>
          <h3 className="mb-4">#2: 6 semaines du 7 novembre au 17 décembre (même horaire, chorégraphies différentes)</h3>
          <h3 className="mb-4">Inscriptions bientôt ouvertes, revenez visiter!</h3>
          <img src={horaireSessionAutomne} className="mb-8" alt="Horaire session automne" />
          
            <p>Les grands spectacles de l'été 2022 sont terminés,</p>
            <p>mais il reste 2 spectacles avec un cours gratuit !!</p>
            <p>Le 2 et le 9 septembre à 18h</p>
            <p>près de la promenade du Lac des Nations, au marché de la Gare!</p>
          </div>
          <div className="row">
            <a href="#mainHeader" className="backTo">Back to menu</a>
          </div>
      </div>
    </div>
  );
}