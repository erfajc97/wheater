import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'
import Loading from './components/Loading'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <div className="containerLoading">

    <Loading/>
    </div>

    <br /><br />

    <div className="container">

    <Weather/>
    
    </div>
    

    
    </div>
  )
}

export default App
