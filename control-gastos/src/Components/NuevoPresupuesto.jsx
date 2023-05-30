
function NuevoPresupuesto() {
  return (
    <div className='contenedor-presupuesto sombra'>
        
        <form className='formulario'>
            <div className='campo'>
                <label>
                    Nuevo presupuesto
                </label>
                <input className="nuevo-presupuesto"
                type="text" placeholder="Introduce tu presupuesto"/>
            </div>
            <input type='submit' value='añadir' />
        </form>
    </div>
  )
}

export default NuevoPresupuesto