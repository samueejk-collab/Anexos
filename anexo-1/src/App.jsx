
import './App.css'
import {useState} from "react"
import { useEffect } from 'react'
import BuscadorPokemon from './componentes/BuscadorPokemon'

const URL = "https://api.github.com/users/samueejk-collab"

function App() {
  const [datos, setDatos] = useState(null)
  const [error, setError] = useState(null)
  const [cargando, setCargando] = useState(true)


  useEffect(() => {
       async function traerPerfil(){
        try{
          const respuesta = await fetch(URL)
        if (!respuesta.ok) { 
          throw new Error("Error HTTP ${respuesta.status}");
        } 
        const perfil = await respuesta.json();
        console.log(perfil)
        setDatos(perfil)
        }catch(error){
          console.log(error)
        }finally{
          setCargando(false)
        }
       }
     traerPerfil();
     }, [])

  if (cargando) {
    return <> 
    cargando ...</>
  }  
  
  if(error){
    return<> Error.. {error}</>
  }
  return (<>
    <img src={datos.avatar_url} alt={datos.avatar_url || datos.name} />
    <h2> {datos.name}</h2>
    <h2> {datos.public_repos} </h2>
    <BuscadorPokemon/>
    </>
  )

}

export default App
