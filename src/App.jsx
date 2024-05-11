import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import InputDetails from './components/InputDetails/InputDetails'
import ShowFlights from './components/ShowFlights/ShowFlights'

function App() {


  return (
    <div>
      <Navbar />
      <h1 className="idk-why py-3">Master Price</h1>
      <hr className="border border-5 border-solid" />
      <InputDetails />

    </div>
  )
}

export default App
