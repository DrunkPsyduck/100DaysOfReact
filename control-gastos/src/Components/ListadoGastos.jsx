import Gasto from "./Gasto"

const ListadoGastos = ({gastos})=> {
  
  return (
    <div>
      <div className="listado-gastos contenedor">
        <h2>{gastos.length ? 'gastos: ' :'No hay gastos aun'}</h2>

        {gastos.map(gasto=>{
            return <Gasto key={gasto.id} gasto={gasto} />;
        })}
        </div>      
    </div>
  )
}

export default ListadoGastos
