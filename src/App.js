import "./App.css";
import logo from "./img/Suicune.jpg";
// import CantidadPokemon from "./components/CantidadPokemon";
// import ComprarPokemon from "./components/CompraPokemon";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Provider } from "react-redux";
import store from "./redux/store";
import CantidadPokemonHook from "./components/CantidadPokemon.hooks";
import CompraPokemonHook from "./components/CompraPokemon.hook";
import BuscadorPokemon from "./components/buscador/BuscadorPokemon";
import ResultadoPokemon from "./components/buscador/ResultadoPokemon";

function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            <div className="card mt-5" style={{ maxWidth: "370px" }}>
              <div className="row no-glutters">
                <div className="col-4">
                  <img src={logo} alt="pokemon" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      <CantidadPokemonHook />
                    </div>
                    <CompraPokemonHook />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 mt-4 border-top pt-3'>
            <BuscadorPokemon />
          </div>
          <div className='col-12'>
            <ResultadoPokemon />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
