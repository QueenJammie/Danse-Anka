import Services from "./Services";
import MainHeader from "./MainHeader";
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import SessionAutomne from "./SessionAutomne";
import Temoignage from "./Temoignage";
import Usana from "./Usana";
import Propos from "./Propos";
import Contact from "./Contact";
import Messenger from "./images/Messenger.png";

import './App.css';

export default function App() 
{
  var today = new Date();

  if ((today.getMonth() + 1) === 1) {
      var date = `${today.getDate()} Janvier ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 2) {
      date = `${today.getDate()} Février ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 3) {
      date = `${today.getDate()} Mars ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 4) {
      date = `${today.getDate()} Avril ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 5) {
      date = `${today.getDate()} Mai ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 6) {
      date = `${today.getDate()} Juin ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 7) {
      date = `${today.getDate()} Juillet ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 8) {
      date = `${today.getDate()} Août ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 9) {
      date = `${today.getDate()} Septembre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 10) {
      date = `${today.getDate()} Octobre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 11) {
      date = `${today.getDate()} Novembre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  if ((today.getMonth() + 1) === 12) {
      date = `${today.getDate()} Décembre ${today.getFullYear()} | ${today.getHours()}:${today.getMinutes()}`;
  }
  return (
    <div className="App" id="mainHeader">
      <div className="container">
        <MainHeader />
        <body>
          <Header />
          <SecondHeader />
          <SessionAutomne />
          <div className="row ">
            <div className="servicesDisponibles">
              <h5 className=" mt-3">Autres services disponibles</h5>
            </div>
            <Services />
            <Temoignage />
            <br />
            <Usana />
            <Propos />
            <Contact />
          </div>
          <a href="https://www.facebook.com/danseanka/" alt="Contacter Danse Anka" target="_blank" rel="noreferrer"><img src={Messenger} alt="" className="messenger" /></a>
        </body>
        <footer className="App-footer">
          <p>{date}<br />
            <a href="https://github.com/QueenJammie/Danse-Anka/tree/main/src" target="_blank" rel="noreferrer">Open Code-Source</a> by <a href="mailto:jammie.lacc@outlook.com">Jammie Lachance-Côté</a></p>
        </footer>
      </div>
    </div>
  );
}
