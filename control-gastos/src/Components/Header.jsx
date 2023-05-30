import NuevoPresupuesto from "./NuevoPresupuesto"


function Header() {
  return (
    <header>
    <h1 className="header"> Control de gastos </h1>
    <NuevoPresupuesto />
    </header>
  )
}

export default Header