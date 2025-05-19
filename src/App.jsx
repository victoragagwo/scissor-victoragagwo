import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar.jsx'
import Myurls from './myurls.jsx'
import { Routes, Route, Link } from 'react-router-dom'

function App() {


  return (
    <>
      <Navbar />

     
      <Myurls />

    </>
  )
}

export default App
