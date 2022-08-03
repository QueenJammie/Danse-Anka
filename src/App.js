import Menu from "./Menu";
import Services from "./Services";
import Sessionete from "./Sessionete";
import logo from "./images/logo.png";
import anka from './images/DanseAnka.jpg';
import tabataOrientale from "./images/tabataOrientale.png";
import katheenCarrier from "./images/KathleenCarrier.jpg";

import './App.css';

function App() {
  let page = "services";
  if (page === "services")
  {
  return (
    <div className="App">
      <div className="container">
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
        <body>
          <div className="row header">
            <div className="col-5">
              <img src={tabataOrientale} alt="" className="mainAnkaimg" />
            </div>
            <div className="col-5">
              <div className="presentation">
                <p className="text">"S'Épanouir, s'Exprimer, Être en santé, Ensemble!"</p>
                <span className="nameAnka">Anka</span>
              </div>
            </div>
          </div>
          <div className="row second-header">
            <div className="col-12">
            <h2>La santé par l'exercice physique et la danse!</h2>
              <ul>
                <li>Plusieurs cours sont offerts chaque session (4 sessions par année)</li>
                <li>De nouvelles disciplines sont ajoutées à la grille horaire</li>
                <li>Il est possible de louer le studio pour des répétitions, ateliers ou autre!</li>
              </ul>
            </div>
          </div>
          <Sessionete />
          <div className="row ">
            <div className="servicesDisponibles">
              <h5 className=" mt-3">Autres services disponibles</h5>
            </div>
            <Services />
          </div>
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
        </body>
        <footer className="App-footer">
          <p>Coded by <a href="mailto:jammie.lacc@outlook.com">Jammie Lachance-Côté</a></p>
        </footer>
      </div>
    </div>
  );
  }
  else if (page === "contact")
  {
    return (
      <div className="contact">
        <p>aaa</p>
      </div>
    );
  }
}

export default App;
