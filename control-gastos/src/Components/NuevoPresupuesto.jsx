import { useEffect, useState } from "react"
import { Mensaje } from "./Mensaje"

function NuevoPresupuesto({presupuesto, setPresupuesto}) {
    const [mensaje, setMensaje] =useState('')
    const handlePresupuesto = (e) => {
        e.preventDefault()

        if(!Number(presupuesto) || Number(presupuesto) < 0){
           setMensaje("No es un presupuesto válido")
        } else {
            //
        }
    }

  return (
    <div className='contenedor-presupuesto sombra'>
        
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>
                    Nuevo presupuesto
                </label>
                <input className="nuevo-presupuesto"
                type="text" placeholder="Introduce tu presupuesto"
                value={presupuesto}
                onChange={e=>{setPresupuesto(e.target.value)}}/>
            </div>
            <input type='submit' value='añadir' />
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </form>
    </div>
  )
}

export default NuevoPresupuesto