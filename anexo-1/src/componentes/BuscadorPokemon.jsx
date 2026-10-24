import { useState} from 'react'

function BuscadorPokemon(){
    const [buscar, setBuscar] = useState("")
    const [pokemon , setPokemon] = useState(null)
    const [errorPokemon, setErrorPokemon] = useState(null)

    const buscarPokemon = async () => {
    if (!buscar.trim()) return;

    try {
      setErrorPokemon(null);
      
      const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${buscar}`);

      if (!respuesta.ok) {
        throw new Error("Pokemon no encontrado");
      }

      const datos = await respuesta.json();

      setPokemon({
        nombre: datos.name,
        imagen: datos.sprites.front_default,
        tipo: datos.types[0].type.name
      });
    } catch (err) {
      setPokemon(null);
      setErrorPokemon("No se encontro pokemon");
    }
  };

  return (
    <div>
      <h2>Buscador de Pokémon</h2>
      
    
      <input 
        type="text" 
        placeholder="buscador" 
        value={buscar}
        onChange={(e) => setBuscar(e.target.value)}
      />
      
      <button onClick={buscarPokemon}>Buscar</button>

      {errorPokemon && <p>{errorPokemon}</p>}

      {pokemon && (
        <div>
          <h3>{pokemon.nombre}</h3>
          <img src={pokemon.imagen} alt={pokemon.nombre} />
          <p>Tipo: {pokemon.tipo}</p>
        </div>
      )}
    </div>
  )
}

export default BuscadorPokemon

