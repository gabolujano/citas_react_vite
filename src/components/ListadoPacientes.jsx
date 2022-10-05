//rafce
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente,eliminarPaciente }) => {


       //console.log()

    return (
        <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll"
        >
            {pacientes && pacientes.length ? (
                <>
                    <h2 className=' font-black text-2xl text-center'>Listado de Pacientes</h2>
                    <p className=' text-xl mt-2 mb-5 text-center'>
                        Administra tus {""}
                        <span className=' text-indigo-600 font-bold '> Pacientes y citas</span>
                    </p>

                    {pacientes.map(paciente => (
                        //       <h1>{paciente.sintomas}</h1>
                        // PASO 11: Pasarle por prop la variable paciente
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente = {setPaciente}
                            eliminarPaciente ={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className=' font-black text-2xl text-center'>No hay Pacientes</h2>
                    <p className=' text-xl mt-2 mb-5 text-center'>
                        Comienza agregando pacientes  {""}
                        <span className=' text-indigo-600 font-bold '> Y apareceran en este lugar</span>
                    </p>
                </>
            )
            }





        </div>
    )
}

export default ListadoPacientes
