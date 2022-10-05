//importar el hook de useSate
import { useState, useEffect } from 'react'
import Error from './Error'

//cual es el estado de tu componente , ejemplo carrito de compra, está vacío, etc.
//rafce

//PASO 4 ENVIAR EL OBJETO setPacientes a APP.jsx
//PASO 7 enviar pacientes a APP.jsx
//PASO 21 se agrega paciente para que reciba el objeto que proviene del BOTON EDITAR.
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente  }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {

        //comprobar si un arreglo viene vacío o no
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre) //SE LLAMA LA FUNCION
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)

        }

    }, [paciente])  //ejecutate solo cuando el paciente cambie ESTA ESCUCHANDO POR PACIENTE



    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }


    //funcion que trae el evento del submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //  console.log('Enviando formulario')
        ///validacion del formulario
        if ([nombre, propietario, email, fecha, sintomas].includes('')) {

            setError(true)
            return;
        }

        setError(false)

        //PASO 5: CONSTRUIR OBJETO DE PACIENTE
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas,
            id: generarId()

        }

        if (paciente.id) {
            //editando el formulario basado en un registro existente
            objetoPaciente.id = paciente.id

            //mandarle los cambios después de editar al mismo objeto original
            //.map retorna un arreglo nuevo

            const pacientesActualizados = pacientes.map(pacienteState =>
                pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacientesActualizados)
            setPaciente({})


        } else {
            //validar nuevo registro
            objetoPaciente.id = generarId();
            setPacientes([...pacientes, objetoPaciente])

        }

        //PASO 8: Pasar un arreglo a la funcion setPacientes y mandarla 
        //APP.jsx, tomando una copia del objeto si no siempre lo plancharía



        //PASO 9: REINICIAR FORMULARIO
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')





        //setNombre ('Flaquita Hermosa'); //ejemplo de asignar valor al nombre causa error 

        //  console.log(nombre);

    }





    return (
        <div className=' md:w-1/2 lg:w-2/5 mx-5'
        >
            <h2 className=' font-black text-3xl text-center'

            >Seguimiento Pacientes</h2>
            <p className=' text-lg mt-2 text-center mb-10'
            >
                Añade pacientes {""}
                <span className=' text-indigo-600 font-bold text-lg'
                >
                    Administralos
                </span>
            </p>

            <form
                onSubmit={handleSubmit}
                className=' bg-white shadow-md rounded-lg py-5 px-5'
            >


                {error && <Error><p>Todos los campos son obligatirios</p></Error>

                }

                <div
                    className=' mb-5'
                >
                    <label htmlFor='mascota'
                        className=' block text-gray-700 uppercase'


                    >Nombre Mascota</label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre del peludo'
                        className=' border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                        //"e" es de evento , estamos leyendo lo que el usuario escribe y lo 
                        //almacena en el evento y asociado al hook 
                        //onChange -->evento de REACTH "camelCase"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                </div>

                <div
                    className=' mb-5'
                >
                    <label htmlFor='propietario'
                        className=' block text-gray-700 uppercase'
                    >Nombre del propietario</label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Dueño del peludo'
                        className=' border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}

                    />

                </div>

                <div
                    className=' mb-5'
                >
                    <label htmlFor='email'
                        className=' block text-gray-700 uppercase'

                    >Email</label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email del propietario'
                        className=' border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}

                    />

                </div>


                <div
                    className=' mb-5'
                >
                    <label htmlFor='alta'
                        className=' block text-gray-700 uppercase'
                    >Fecha de registro</label>
                    <input
                        id='alta'
                        type="date"
                        className=' border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}

                    />

                </div>

                <div className=' mb-5'>
                    <label htmlFor='sintomas'
                        className=' block text-gray-700 uppercase'
                    >Sintomas
                    </label>
                    <textarea
                        id='sintomas'
                        className=' border-2 w-full p-2 mt-1 placeholder-gray-400 rounded-md'
                        placeholder='Describe los sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}

                    >
                    </textarea>
                </div>

                <input
                    type="submit"
                    className=' bg-indigo-600 w-full p-3 text-white uppercase 
                    hover:bg-indigo-800 cursor-pointer transition-all mb-2'
                    value={paciente.id ? 'Editar Paciente' : 'Agregar paciente'}

                />


            </form>

        </div>
    )
}

export default Formulario
