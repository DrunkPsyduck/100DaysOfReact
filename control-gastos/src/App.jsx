import { useState, useEffect } from 'react'
import Header from './Components/Header'
import Modal from './Components/Modal'
import ListadoGastos from './Components/ListadoGastos'
import { generarID } from './Components/helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gastoEditar, setGastoEditar] = useState({})

  useEffect(() => {
    if( Object.keys(gastoEditar).length > 0 ) {
        setModal(true)

        setTimeout(() => {
            setAnimarModal(true)
        }, 500);
    }
  }, [ gastoEditar ])

  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  // useEffect(() => {
  //   if(filtro) {
  //       const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)
  //       setGastosFiltrados(gastosFiltrados)
  //   }
  // }, [filtro]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0;

    if(presupuestoLS > 0 ) {
      setIsValidPresupuesto(true)
    }
  }, []);
  


  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
        setAnimarModal(true)
    }, 500);
  }

  const guardarGasto = gasto => {
    if(gasto.id) {
      // Actualizar
      const gastosActualizados = gastos.map( gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados);
      setGastoEditar({})
    } else {
      // Nuevo Gasto
      gasto.id = generarID();
      gasto.fecha = Date.now();
      setGastos([...gastos, gasto ])
    }
    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter((gasto) => gasto.id !== id);
    setGastos(gastosActualizados);
  }
  return (
    <div className={modal ? 'fijar': ''}>
      <Header
      gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
      />
      {isValidPresupuesto && (
        <>
          <main>
            <ListadoGastos gastos={gastos} setGastoEditar={setGastoEditar}/>
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="nuevo gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}
      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
        />
      )}
    </div>
  );
}

export default App
