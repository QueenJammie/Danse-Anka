import Services from "./Services";
import MainHeader from "./MainHeader";
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Sessionete from "./Sessionete";
import Temoignage from "./Temoignage";
import Usana from "./Usana";
import Propos from "./Propos";
import Contact from "./Contact";
import Messenger from "./images/Messenger.png";

import './App.css';

export default function App() 
{
  return (
    <div className="App" id="mainHeader">
      <div className="container">
        <MainHeader />
        <body>
          <Header />
          <SecondHeader />
          <Sessionete />
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
          <p><a href="https://github.com/QueenJammie/Danse-Anka/tree/main/src" target="_blank" rel="noreferrer">Open Code-Source</a> by <a href="mailto:jammie.lacc@outlook.com">Jammie Lachance-Côté</a></p>
        </footer>
      </div>
    </div>
  );
}
