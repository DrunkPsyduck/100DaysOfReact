

const Gasto =({key, gasto})=> {
    const {categoria, nombre, cantidad, id} = gasto
  return (
    <div className="gasto sombra">
        <div className="contenido-gasto">
            <div className="descripcion-gasto">
                <a className="categoria">
                    {categoria}
                </a>
                <a className="categoria">
                    {nombre}
                </a>
            </div>
        </div>

    </div>
  )
}


export default Gasto;