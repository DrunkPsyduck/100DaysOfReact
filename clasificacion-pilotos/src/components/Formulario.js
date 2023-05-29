import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pilotos, setPilotos, piloto, setPiloto}) => {
    const [nombre, setNombre] = useState('')
    const [numero, setNumero] = useState('')
    const [equipo, setEquipo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [error, setError] = useState(false)

    // ! useEffect() funciona igual que componentDidMount() y componentDidUpdate()
    // * revisar notas master para recordarlo
    
    useEffect(()=>{
        if(Object.keys(piloto).length>0 ){
            setNombre(piloto.nombre)
            setNumero(piloto.numero)
            setEquipo(piloto.equipo)
            setCategoria(piloto.categoria)
        }
        }, [piloto])

    function generarId(){
        const random = Math.random.toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return random+fecha            
    }

    function handleSubmit(e){
        e.preventDefault()

        if ([nombre, numero, equipo, categoria].includes('')){
            setError(true)
            return;
        }
        setError(false)

        const objetoPiloto = {
            nombre,
            numero, 
            equipo,
            categoria
        }
      
        if(piloto.id){
            // editar registro
            objetoPiloto.id = piloto.id
            const pilotosActualizados = 
                pilotos.map
                    ( pilotoState => pilotoState === piloto.id ? objetoPiloto : pilotoState )
            setPilotos(pilotosActualizados)
            setPiloto({})

        } else {
            // nuevo piloto
            objetoPiloto.id = generarId();
            setPilotos([...pilotos, objetoPiloto])
        }

        //reiniciar form
        setNombre('')
        setNumero('')
        setEquipo('')
        setCategoria('')
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pilotos</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-emerald-600 font-bold ">Administrar pilotos</span>
            </p>
        
            <form
                onSubmit={handleSubmit} 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >

                {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <div className="mb-5">
                    <label htmlFor="nombre" 
                        className="block text-gray-700 uppercase text-bold" >
                            Nombre del Piloto
                    </label>
                    <input id='nombre' type='text' placeholder='Nombre del piloto'
                            className="border-2 w-full p-2 mt-2 placeholder-emerald-800 rounded-xl"
                            value={nombre}
                            onChange={(e)=> setNombre(e.target.value)}     
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="equipo" 
                        className="block text-gray-700 uppercase text-bold" >
                            Equipo del Piloto
                    </label>
                    <input id='equipo' type='text' placeholder='Equipo del piloto'
                            className="border-2 w-full p-2 mt-2 placeholder-emerald-800 rounded-xl"
                            value={equipo}
                            onChange={(e)=> setEquipo(e.target.value)}     
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="numero" 
                        className="block text-gray-700 uppercase text-bold" >
                            Numero
                    </label>
                    <input id='numero' type='number' min="0" max='100' setp='1' placeholder='Numero del piloto'
                            className="border-2 w-full p-2 mt-2 placeholder-emerald-800 rounded-xl"
                            value={numero}
                            onChange={(e)=> setNumero(e.target.value)}     
                    />
                </div>

                <div className="mb-5 ">
                    <label htmlFor="categoria" 
                        className="block text-gray-700 uppercase text-bold" >
                            Categoria del Piloto
                    </label>
                    <input id='categoria' type='text' placeholder='Categoria del piloto'
                            className="border-2 w-full p-2 mt-2 placeholder-emerald-800 rounded-xl"
                            value={categoria}
                            onChange={(e)=> setCategoria(e.target.value)}     
                    />
                </div>

                
                <input 
                    type="submit"
                    value={piloto.id ? 'Editar Piloto': 'Agregar Piloto'}
                    className="bg-indigo-600 w-full mb-3 p-3 text-white uppercase font-bold hover:bg-indigo-700
                       cursor-pointer transition-colors rounded-xl"/>
            </form>
        
        </div>
    )
}

export default Formulario;