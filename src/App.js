import Menu from "./Menu";
import Services from "./Services";
import anka from './images/DanseAnka.jpg';

import './App.css';

function App() {
  let currentDate = <em>2022-08-01</em>;
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row mt-5">
            <h1 className="title"><img src={anka} width="50" alt="logo" className="me-3" />Danse Anka</h1>
            <Menu />
              <h5 className="servicesDisponibles">Autres services disponibles</h5>
              <Services />
                
          </div>
        </header>
        <body>

        </body>
        <footer className="App-footer">
          {currentDate}
        </footer>
      </div>
    </div>
  );
}

export default App;
