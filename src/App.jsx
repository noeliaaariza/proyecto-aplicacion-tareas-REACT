import "./App.css";
import logo from "../src/img/fcc_primary.svg";
import Logo from "./componentes/Logo";

function App() {
  const logoInfo = {
    alt: "logo de Freecodecamp",
    src: logo,
  };
  return (
    <div className="aplicacion-tareas">
      <Logo logo={logoInfo} />
    </div>
  );
}

export default App;
