import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  //PASO 1 DE PROPS:ARREGLO de objetos, que se ira llenando del FORMULARIO
  const [pacientes, setPacientes] = useState([]);
 
  //paso para el boton EDITAR un SOLO PACIENTE de tipo OBJETO
  const [paciente, setPaciente] = useState({});

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id )
    
    setPacientes(pacientesActualizados)
  }

  //ejemplo de traer valores del arreglo 
  //console.log(pacientes.length);

    //obtener lo que haya en localstorage
  useEffect(() => {
    const obtenerLS=() =>{
      //const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }

    obtenerLS()

  }, [])


  ///para guardar en STORAGE, SOLO GUARDA STRING hay que pasarlo de arreglo a STRINGS.
   useEffect(()=> {
    localStorage.setItem('pacientes', JSON.stringify( pacientes ))  
    }, [pacientes]
   
            )

  return (
    <div className="container mx-auto mt-5">
      <Header
      />

      <div className="mt-12 md:flex">
        <Formulario
          //PASO 6 recibirlo via PROP
          pacientes={pacientes}
          //PASO 2 DE PROPS: recibir valores o recibir del hijo (a través de funcion y PROPS)
          setPacientes = {setPacientes}
          setPaciente ={setPaciente}


         ///PASO 20, recibir el objeto de paciente que provien del BOTON EDITAR
          paciente= {paciente}

        />
        <ListadoPacientes 
        pacientes= {pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente = {eliminarPaciente}
        />

      </div>

    </div>
  )
}

export default App
