

const Piloto = ({piloto, setPiloto, eliminarPiloto}) => {

    const {nombre, numero, equipo, categoria, id} = piloto
    // SIn terminar. Volvere luego a solucionarlo
    const handleEliminar = () =>{

            eliminarPiloto(id)


    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Numero: {''}
                <span className="font-normal normal-case">{numero}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Equipo: {''}
                <span className="font-normal normal-case">{equipo}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">Categoria: {''}
                <span className="font-normal normal-case">{categoria}</span>
            </p>


            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPiloto(piloto)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
     )
}

export default Piloto