import { Pacientes } from "./Pacientes"


const ListadoPacientes = () => {
    return (
        <div className="md:w1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            <h2 className="font-black text-3xl tex-center">Listado Pacientes</h2>
            <p>Administa tus {''}
            <span className="text-indigo-600 font-bold text-center">pacientes y citas</span>
            </p>
       
            <Pacientes/>
            <Pacientes/>
        </div>
    )
}

export default ListadoPacientes
