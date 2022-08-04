import React from "react";
import facebookIcon from "./images/facebookIcon.png";

import "./contact.css";

export default function Contact()
{
  return (
    <div className="Contact" id="Contact">
      <div className="row">
        <div className="title col-4">
          <h2>Nous contacter</h2>
        </div>
      </div>
      <div className="row">
        <ul className="menu">
          <li className="location">40 rue Wellington Nord, Sherbrooke, Qc,</li>
          <li className="location">J1H 5B7</li>
          <li className="location tel">819-578-1970</li>
          <li className="location email">info@danseanka.com</li>
        </ul>
        <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fdanseanka%2F" target="_blank" rel="noreferrer" alt="">
          <img src={facebookIcon} alt="" className="facebookIcon" />
        </a>
      </div>
    </div>
  );
}