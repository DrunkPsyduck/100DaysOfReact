import NuevoPresupuesto from "./NuevoPresupuesto"


function Header({presupuesto, setPresupuesto}) {
  return (
    <header>
        <h1 className="header"> Control de gastos </h1>
        <NuevoPresupuesto 
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
        />
    </header>
  )
}

export default Header