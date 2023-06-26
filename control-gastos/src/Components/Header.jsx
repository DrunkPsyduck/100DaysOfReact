import NuevoPresupuesto from "./NuevoPresupuesto"
import ControlPresupuesto from "./controlPresupuesto";


function Header({presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto}) {
  return (
    <header>
        <h1 className="header"> Control de gastos </h1>
        
        
        {isValidPresupuesto ? (
          <ControlPresupuesto presupuesto={presupuesto}/>
        ):
        (
          <NuevoPresupuesto 
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />

        )}

    </header>
  )
}

export default Header;