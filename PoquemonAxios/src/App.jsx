import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [filtro, setFiltro] = useState([]);
  const [inputs, setInputs] = useState('')

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        setPokemons(response.data.results)
      })
  }, [])




  const handleLoadPokemons = (e) => {
    e.preventDefault();
    const filteredPokemons = pokemons.filter(pokemon =>
      pokemon.name.includes(inputs.toLowerCase())
    );
    setFiltro(filteredPokemons);
    setInputs('')
  }


  return (
    <>
      <div className='container mt-5'>
        <form className="d-grid gap-2" onSubmit={handleLoadPokemons}>
          <input
            type="text"
            value={inputs}
            className='form-control'
            placeholder='Ingresa un pokemon'
            onChange={(e) => (setInputs(e.target.value))}
          />
          <button type="submit" className="btn btn-primary">Fetch Pokemons</button>
        </form>
        <ul>
          {
            (filtro.length === 0)
              ? <p className='text-danger text-center mt-3'>Aun no presionas el botón!</p>
              : filtro.map((pokemon, index) => (
                <li key={index}>{pokemon.name}</li>
              ))
          }
        </ul>
      </div>
    </>
  )
}

export default App
