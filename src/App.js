import './App.css';
import React, {useState} from "react";

function App() {

  const [contador, setContador] = useState(0);

  return (
    <div className="App">
      <div className='contador'>

        <button className="btn" onClick={()=>setContador(contador-1)}>-</button>

        <span className="num">{contador}</span>

        <button className="btn" onClick={()=>{setContador(contador+1)}}>+</button>

      </div>
    </div>
  );
}

export default App;
