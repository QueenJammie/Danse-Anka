import React from "react";

export default function Sessionete()
{
  return (
    <div className="sessionete">
      <div className="row sessionForNow">
          <h2 id="sessionEte">Session Printemps-Été en cours !</h2>
          <p>Prochaine session dès septembre, l'horaire sera disponible dès la mi-août!<br />
          Entre temps, venez nous voir en spectacle:</p>
          <ul>
            <li className="noListStyle"><a href="https://www.facebook.com/events/1245212046251233" alt="Festival Gladiamort sur Facebook">30 juillet à 18h30 au Festival Médiéval Gladiamort 2022</a></li>
            <li className="noListStyle"><a href="https://www.facebook.com/events/1409916459474907" alt="La troupe au Festival des Traditions du Monde de Sherbrooke sur Facebook">7 Août entre 14h et 16h au Grand Défilé Anniversaire du Festival des Traditions du Monde</a></li>
          </ul>
          <p className="memo">Nos services ne sont pas assujetis aux taxes!</p>
      </div>
    </div>
  );
}