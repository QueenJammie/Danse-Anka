import Menu from "./Menu";
import Services from "./Services";
import logo from "./images/logo.png";
import anka from './images/DanseAnka.jpg';
import tabataOrientale from "./images/tabataOrientale.png";

import './App.css';

function App() {
  let currentDate = <em>2022-08-01</em>;
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row mt-5">
            <div className="col-6">
            <h1 className="title"><img src={anka} width="50" alt="logo" className="ms-5" />Danse Anka</h1>
            <Menu />
            </div>
            <div className="col-6">
              <img src={logo} alt="Logo Danse Anka" height="180" className="mt-5 ms-5" />
            </div>
          </div>
        </header>
        <body>
          <div className="row header">
            <img src={tabataOrientale} alt="" className="mainAnkaimg" />
          </div>
          <div className="row">

            <h5 className="servicesDisponibles mt-3">Autres services disponibles</h5>
            <Services />
          </div>
        </body>
        <footer className="App-footer">
          {currentDate}
        </footer>
      </div>
    </div>
  );
}

export default App;
