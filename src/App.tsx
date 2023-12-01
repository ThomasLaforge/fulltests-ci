import { ChangeEvent, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getHour } from './modules/heure'

function App() {
  const [lune, setLune] = useState(1)
  const [terre, setTerre] = useState(1)
  const [soleil, setSoleil] = useState(1)

  const handleChangeValue = (type: string, e: ChangeEvent<HTMLInputElement>) => {
    console.log(type, e.target.value);
    
    let value = parseInt(e.target.value)
    
    if(value === 1 || value === 2) {
      if (type === "lune") {
        setLune(value)
      } else if (type === "terre") {
        setTerre(value)
      } else if (type === "soleil") {
        setSoleil(value)
      }
    }
  }

  return (
      <div className="app">
        <div className="heure-form">
          <input type="number" min={1} max={1} value={lune} onChange={(e) => handleChangeValue("lune", e)} />
          <input type="number" min={1} max={1} value={terre} onChange={(e) => handleChangeValue("terre", e)} />
          <input type="number" min={1} max={1} value={soleil} onChange={(e) => handleChangeValue("soleil", e)} />
        </div>
        <div className="heure">
          <div className="heure-value">{getHour(lune, terre, soleil)}</div>
        </div>
      </div>
  )
}

export default App
