import Services from "./Services";
import MainHeader from "./MainHeader";
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Sessionete from "./Sessionete";
import Temoignage from "./Temoignage";

import './App.css';

export default function App() {
  let page = "services";
  if (page === "services")
  {
  return (
    <div className="App">
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
          </div>
          <Temoignage />
          
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
