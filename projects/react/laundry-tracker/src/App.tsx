import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import OrderCard from './OrderCard.tsx'
import './App.css'

function App() {

  const version = 1.0;

  return (
    < div className="app" >
      <h1>Laundry Tracker</h1>
      <OrderCard customer='Brian' items={3} status="washing" />
      <OrderCard customer='Jane' items={5} status="delivering" />
    </div >
  )
}

export default App
