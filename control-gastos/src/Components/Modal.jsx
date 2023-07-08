import { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import Cerrar from './../img/cerrar.svg'

const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, SetMensaje] = useState("");

  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
    }
  },[])
  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      SetMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        SetMensaje("");
      }, 3000);
      return;
    }

    guardarGasto({ nombre, cantidad, categoria });
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="cerrar modal" onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend> Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el Nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>

          <input
            id="cantidad"
            type="number"
            placeholder="Añade La cantidad del gasto: ej. 300"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
          </select>
          <input type="submit" value="Añadir gasto" />
        </div>
      </form>
    </div>
  );
};

export default Modal