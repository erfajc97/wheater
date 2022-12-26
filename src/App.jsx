import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
axios
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <div className="container">

    <Weather/>
    </div>
    

    
    </div>
  )
}

export default App
