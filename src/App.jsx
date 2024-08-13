import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="container px-4 mx-auto read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
   <div className="flex flex-col border-2 border-solid border-red-50 shadow-warmGlow">
    <div className="flex flex-col text-warmRed">beepboop</div>
    <div className="flex flex-col">beepboop1</div>
    <div className="flex flex-col">beepboop2</div>
   </div>
      <h1 className="text-3xl font-extrabold underline-offset-0">
    Hello world!
  </h1>
    </>
  )
}

export default App
