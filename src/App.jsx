import { useState } from 'react'
import './App.css'

function App() {
  const [colorChange, setColorChange] = useState("white")

  return (
    <>
      <section className='vh-100 w-100 d-flex flex-column justify-content-center align-items-center gap-4' style={{ background: colorChange }} >
          <h2><em>BACKGROUND COLOR CHANGER</em></h2>
          <div className='btn-container d-flex justify-content-center align-items-center gap-4'>
            <button className='btn-red' onClick={() => setColorChange("red")} >Red</button>
            <button className='btn-black' onClick={() => setColorChange("black")}>Black</button>
            <button className='btn-blue' onClick={() => setColorChange("blue")}>Blue</button>
            <button className='btn-orange' onClick={() => setColorChange("orange")}>Orange</button>
          </div>
        
      </section>
    </>
  )
}

export default App
