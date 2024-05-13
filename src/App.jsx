import "./App.css";
import logo from "../src/img/fcc_primary.svg";
import Logo from "./componentes/Logo";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  const logoInfo = {
    alt: "logo de Freecodecamp",
    src: logo,
  };
  return (
    <div className="aplicacion-tareas">
      <Logo logo={logoInfo} />

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
