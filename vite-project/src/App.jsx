import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar'
import Gallery from './assets/components/Gallery'
import Gameofyear from './assets/components/Gameofyear'
import Revenge from './assets/components/Revenge'
import Getnow from './assets/components/Getnow'
import Enemies from './assets/components/Enemies'
import Connected from './assets/components/Connected'
export default function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Navbar/>
      <Gameofyear/>
      <Revenge/>
      <Getnow/>
      <Enemies/>
      <Gallery/>
      <Connected/>
      </BrowserRouter>
    </div>
  )
}
