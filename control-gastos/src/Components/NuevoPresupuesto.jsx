import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje"

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  const [mensaje, setMensaje] = useState("");
  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
    }

    setMensaje("");
    setIsValidPresupuesto(true)
  };

  return (
    <div className="contenedor-presupuesto sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label>Nuevo presupuesto</label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Introduce tu presupuesto"
            value={presupuesto}
            onChange={(e) => {
              setPresupuesto(Number(e.target.value));
            }}
          />
        </div>
        <input type="submit" value="añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
}

export default NuevoPresupuesto