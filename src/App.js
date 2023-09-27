import './App.css';
import React, { useState } from 'react';
import './App.css';
import gato from './img/gato.png'; 
import perro from './img/perro.png';

function App() {
  const [contador, setContador] = useState(0);
  const [animales, setAnimales] = useState([]);

  const agregarAnimal = () => {
    if (contador >= 0) {
      setAnimales([...animales, {top: Math.random() * (window.innerHeight - 128), left: Math.random() * (window.innerWidth - 128)}]);
    } else if (contador < 0 && animales.length > 0) {
      setAnimales(animales.slice(0, -1));
    }
    setContador(contador + 1);
  }

  
  const quitarAnimal = () => {
    if (contador > 0 && animales.length > 0) {
      setAnimales(animales.slice(0, -1));
    } else if (contador <= 0) {
      setAnimales([...animales, {top: Math.random() * (window.innerHeight - 128), left: Math.random() * (window.innerWidth - 128)}]);
    }
    setContador(contador - 1);
  }

  const resetear = () => {
    setContador(0);
    setAnimales([]);
  }

  return (
    <div className="App">
      <div className='contador'>
        <button className="btn" onClick={quitarAnimal}>-</button>
        <span className="num">{contador}</span>
        <button className="btn" onClick={agregarAnimal}>+</button>
      </div>
      <div className='resetear'>
          <p>¿Muchos clicks?</p>
          <button onClick={resetear}>Volvé a 0</button>
      </div>
      {animales.map((animal, index) => (
        <img key={index} src={contador > 0 ? gato : perro} style={{position: 'absolute', top: animal.top, left: animal.left}} alt="animal" />
      ))}
    </div>
  );
}

export default App;
