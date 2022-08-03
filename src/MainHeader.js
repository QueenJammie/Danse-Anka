import React from "react";
import Menu from "./Menu";
import logo from "./images/logo.png";
import anka from './images/DanseAnka.jpg';

export default function MainHeader()
{
  return (
    <div className="MainHeader">
      <header className="App-header">
        <div className="row mt-5">
          <div className="col-8">
          <h1 className="title"><img src={anka} width="50" alt="logo" className="ms-5 me-3" /><span className="title">Danse Anka</span></h1>
          <Menu />
          </div>
          <div className="col-4">
            <img src={logo} alt="Logo Danse Anka" height="180" className="mt-5 ms-5" />
          </div>
        </div>
      </header>
    </div>
  );
}