import Formulario from "./Formulario";
import "../css/ListaDeTareas.css";
import { useState } from "react";
import Tarea from "../componentes/Tarea";

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (tarea.texto.trim()) {
      //el if devuelve true si después de hacer el trim, sigue siendo un string con carácteres. Si al hacer trim, quedara en string vacío, el resultado sería false, y no se ejecutaría el if
      tarea.texto = tarea.texto.trim(); // se llama al método trim para esta vez asegurar que no haya espacios en blanco ni delante ni detrás
      const tareasActualizadas = [tarea, ...tareas]; //se crea una nueva constante que es un array que RiContractLeftLine, la tarea nueva, y con spread operator se añade a la variable de estado tareas
      setTareas(tareasActualizadas); // se llama al actualizador setTareas pasándole como nuevo valor la constante tareas Actualizadas
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  return (
    <>
      <Formulario onSubmit={agregarTarea} />
      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaDeTareas;
