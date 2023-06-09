import './App.css';
import Header from './components/Header'
import Formulario from './components/Formulario';
import ListadoPilotos from './components/ListadoPilotos';
import { useEffect, useState } from 'react';
function App() {

  const [pilotos, setPilotos] = useState([])
  const [piloto, setPiloto] = useState({})

  // ! useEffect() funciona igual que componentDidMount() y componentDidUpdate()
  // * revisar notas master para recordarlo

  useEffect(()=>{
    const obtenerLP = () => {
      const pilotosLS = JSON.parse(localStorage.getItem('pilotos')) ?? [];
      setPilotos(pilotosLS)
    }
    obtenerLP();
  }, [])

  useEffect(()=> {
    localStorage.setItem('pilotos', JSON.stringify( pilotos ));
  }, [pilotos])

  const eliminarPiloto = id =>{
    const pilotosActualizados = pilotos.filter(piloto => piloto.id !== id);
    setPilotos(pilotosActualizados)

  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
     
      <div className="mt-12 md:flex">
        <Formulario 
          pilotos={pilotos}
          setPilotos={setPilotos}
          piloto={piloto}
          setPiloto={setPiloto}
        />
        <ListadoPilotos 
          pilotos={pilotos}
          setPiloto={setPiloto}
          eliminarPiloto={eliminarPiloto}
          />
      </div>
    </div>
  );
}

export default App;
