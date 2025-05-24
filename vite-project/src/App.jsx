import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Gallery from './assets/components/Gallery'
import Gameofyear from './assets/components/Gameofyear'
import Revenge from './assets/components/Revenge'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Gameofyear/>
      <Revenge/>
      </BrowserRouter>
    </div>
  )
}
