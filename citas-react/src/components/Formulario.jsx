import { useState, useEffect } from 'react';


const Formulario = () => {
   
    const [nombre, setNombre] = useState()
    const [propietario, setPropietario] = useState()
    const [email, setEmail] = useState()
    const [fecha, setFecha] = useState()
    const [sintomas, setSintomas] = useState()
    const [error,setError] = useState(false) 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if([nombre,propietario, email, fecha,sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)
        
    } 

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                {error && <div className='text-red-600 text-bold p-3 uppercase mb-3'>
                            <h1 >Todos los campos son obligatorios</h1>
                        </div>}
                <div>
                        <label htmlFor='nombreMascota' 
                            className="block text-gray-700 uppercase">Nombre mascota {nombre} </label>


                        <input id="nombreMascota" type='text' value={nombre} onChange={ (e) => setNombre(e.target.Value)} 
                                placeholder="Nombre de la mascota" className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'/>
                </div>
                <div>
                        <label htmlFor='nombrePropietario' 
                            className="block text-gray-700 uppercase">Nombre Propietario</label>


                        <input id="nombrePropietario" type='text' value={propietario} onChange={ (e) => setPropietario(e.target.Value)} 
                            placeholder="Nombre del propietario" 
                            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'/>
                </div>
                <div>
                        <label htmlFor='email' 
                            className="block text-gray-700 uppercase">Email</label>


                        <input id="email" type='email' value={email} onChange={ (e) => setEmail(e.target.Value)}
                            placeholder="email contacto" 
                            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'/>
                </div>
                <div>
                        <label htmlFor='FechaAlta' 
                            className="block text-gray-700 uppercase">Fecha alta</label>


                        <input id="fechaAlta" type='date' value={fecha} onChange={ (e) => setFecha(e.target.Value)}
                            className='border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md'/>
                </div>
                <div>
                        <label htmlFor='Sintomas' value={sintomas} onChange={ (e) => setSintomas(e.target.Value)}
                            className="block text-gray-700 uppercase">Sintomas</label>


                        <textarea htmlFor='Sintomas' 
                            placeholder='Describe los sintomas' className="border-2 w-full p-2 mt-2 text-gray-700 uppercase" />

                </div>
                <input type='submit' value="agregar paciente"
                    className='bg-purple-400 w-full p-3  text-white uppercase 
                        font-bold hover:bg-indigo-500 cursor-pointer transition-all'/>
            </form>
        </div>
    )
}

export default Formulario
