import Piloto from "./Piloto";

const ListadoPilotos = ({pilotos, setPiloto, eliminarPiloto}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pilotos && pilotos.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado pilotos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra a los  {''}
                        <span className="text-indigo-600 font-bold ">pilotos</span>
                    </p>

                    {pilotos.map( piloto => (
                        <Piloto 
                            key={piloto.id}
                            piloto={piloto}
                            setPiloto={setPiloto}
                            eliminarPiloto={eliminarPiloto}
                        />
                    ))}
                </>
            ):(
                <>
                    <h2 className="font-black text-3xl text-center">No hay pilotos</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pilotos {''}
                        <span className="text-indigo-600 font-bold ">y aparecerán en este lugar</span>
                    </p>
                </>
            )}

        </div>
    )
}

export default ListadoPilotos;