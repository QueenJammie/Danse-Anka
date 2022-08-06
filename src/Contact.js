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
        <div className="col-8">
          <ul className="menu">
            <li className="location">40 rue Wellington Nord, Sherbrooke, Qc,</li>
            <li className="location">J1H 5B7</li>
            <li className="location"><a href="tel: 8195781970">819-578-1970</a></li>
            <li className="location"><a href="mailto: info@danseanka.com">info@danseanka.com</a></li>
          </ul>
          <a href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.facebook.com%2Fdanseanka%2F" target="_blank" rel="noreferrer" alt="">
            <img src={facebookIcon} alt="" className="facebookIcon" />
          </a>
        </div>
        <div className="row">
          <a href="#mainHeader" className="backTo">Back to menu</a>
        </div>
      </div>
    </div>
  );
}