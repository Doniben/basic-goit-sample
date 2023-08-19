import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import goitLogo from './assets/Goit-logo.png'
import './App.css'

function App() {
  const [ counter, setCounter ] = useState(0)

  const sumar = () => {
    setCounter(counter + 1)
  }

  const restar = () => {
    setCounter(counter - 1)
  }

  const reset = () => {
    setCounter(0)
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://goit.global/ph/" title="GoIT Global" aria-label="GoIT Global">
          <img src={goitLogo} className="logo goit" alt="GoIt logo" />
        </a>
      </div>
      <h1>Vite + React + GOIT</h1>
      <h2 className='text-white'>{counter}</h2>
      <div className="d-flex justify-content-center">
        <button onClick={sumar} className="btn btn-success mr-2">+1</button>
        {counter > 0 && <button onClick={restar} className="btn btn-warning mr-2">-1</button>}
        <button onClick={reset} className="btn border btn-light text-withe">reset</button>
      </div>
    </div>
  )
}

export default App
