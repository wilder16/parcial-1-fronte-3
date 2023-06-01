import Card from './Card';
import { useState } from 'react'
import './App.css'


function App() {
  const [nombre, setNombre] = useState("")
  const [errorInput, setErrorInput] = useState("");
  const [color, setColor] = useState("")
  const [mostrarCard, setMostrarCard] = useState(false);
  const mensajeErrro = "Por favor chequea que la información sea correcta"


  const handleSubtmit = (e) => {
    e.preventDefault()

    if(nombre.length < 3 || nombre.startsWith(' ')){
      setErrorInput(mensajeErrro)
      return
    }else if(color.length < 6){
      setErrorInput(mensajeErrro)
      return
    }else{
      setMostrarCard(true)
    }

  }



  return (
    <div className="App" onSubmit={handleSubtmit}>
      <h1>Elige un color</h1>
      <form>
        <input 
        type="text"
        placeholder="Ingrese tu nombre"
        value={nombre}
        onChange={e => setNombre(e.target.value)}
        />
        <input 
        type="number" 
        placeholder="Ingrese tu color favorito (formato HEX)"
        value={color}
        onChange={e => setColor(e.target.value)}
        />
        <button type="submit">ENVIAR</button>

        {errorInput && <div className="error">{errorInput}</div>}
      </form>
      {mostrarCard && (
          <Card nombre={nombre} color={color} />
        )}
    </div>
  );
}

export default App;
