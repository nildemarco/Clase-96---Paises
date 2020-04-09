import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [paises, setPaises] = useState('')
  const [busqueda, setBusqueda] = useState('')

  const buscarPaises = () => {
    if(busqueda) {
    fetch(`https://restcountries.eu/rest/v2/name/${busqueda}`)
      .then(res => res.json())
      .then(data => setPaises(data))
    }
  }

  useEffect(buscarPaises, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value)
   }
  
   const handleSubmit = e => {
    e.preventDefault()
    buscarPaises(busqueda)
   }
 


  return (
    <div className="App">
      <div className='Card'>
        {
        paises &&
          paises.map(pais =>{
            return(
            <>
            <h4>{pais.name}</h4>
            <img src={pais.flag} />
            <p>Capital: {pais.capital}</p>
            <p>Habitantes: {pais.population}</p>
            </>
             ) 
          }) 
        }  
      </div>
     <div>
       <form onSubmit={handleSubmit}>
       <input type= 'text' value={busqueda} onChange={handleChange}/>
       </form>
     </div>
    </div>
  );
}

export default App;
