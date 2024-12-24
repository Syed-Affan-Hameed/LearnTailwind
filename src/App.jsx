import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-blue-400 text-white text-2xl'>This is my first design</h1>
    <button className='bg-cyan-600 m-4 p-3 rounded text-white hover:bg-cyan-950'>Press this</button>
    </>
  )
}

export default App
